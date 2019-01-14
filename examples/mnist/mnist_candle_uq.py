import mnist_uq
import candle_keras as candle
from candle_keras import PermanentDropout

def initialize_parameters():

    # Build benchmark object
    mnist_common = mnist_uq.MNIST(mnist_uq.file_path,
        'mnist_complex.txt',
        'keras',
        prog='mnist_mlp',
        desc='MNIST example'
    )

    # Initialize parameters
    gParameters = candle.initialize_parameters(mnist_common)

    return gParameters

def run(gParameters):
    import keras
    from keras.datasets import mnist
    from keras.models import Sequential
    from keras.layers import Dense, Dropout
    from keras.optimizers import RMSprop
    from keras.callbacks import Callback, ModelCheckpoint

    batch_size = gParameters['batch_size']
    num_classes = 10
    dense_layers = gParameters['dense']
    dropout = gParameters['dropout']
    epochs = gParameters['epochs']

    activation = gParameters['activation']
    optimizer = gParameters['optimizer']

    # the data, split between train and test sets
    (x_train, y_train), (x_test, y_test) = mnist.load_data()

    x_train = x_train.reshape(60000, 784)
    x_test = x_test.reshape(10000, 784)
    x_train = x_train.astype('float32')
    x_test = x_test.astype('float32')
    x_train /= 255
    x_test /= 255
    print(x_train.shape[0], 'train samples')
    print(x_test.shape[0], 'test samples')

    # convert class vectors to binary class matrices
    y_train = keras.utils.to_categorical(y_train, num_classes)
    y_test = keras.utils.to_categorical(y_test, num_classes)

    model = Sequential()
    for i, layer_width in enumerate(dense_layers):
        if i == 0:
            model.add(Dense(layer_width, activation=activation, input_shape=(784,)))
        else:
            model.add(Dense(layer_width, activation=activation))
        if dropout > 0:
            model.add(PermanentDropout(dropout))

    model.add(Dense(num_classes, activation='softmax'))

    model.summary()

    model.compile(loss='categorical_crossentropy',
                optimizer=optimizer,
                metrics=['accuracy'])

    # save json model
    model_json = model.to_json()
    with open(gParameters['model_file'], 'w') as fp:
        print(model_json, file=fp)

    # save weights
    callbacks = []
    callbacks.append(ModelCheckpoint(gParameters['weights_file'], save_best_only=True, save_weights_only=True))

    history = model.fit(x_train, y_train,
                        batch_size=batch_size,
                        epochs=epochs,
                        callbacks=callbacks,
                        verbose=1,
                        validation_data=(x_test, y_test))
    score = model.evaluate(x_test, y_test, verbose=0)
    print('Test loss:', score[0])
    print('Test accuracy:', score[1])

    return history

if __name__ == '__main__':
    gParams = initialize_parameters()
    run(gParams)
