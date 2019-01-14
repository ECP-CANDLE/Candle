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
    from keras.utils import get_custom_objects
    from keras.models import model_from_json
    import numpy as np

    batch_size = gParameters['batch_size']
    num_classes = 10

    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_test = x_test.reshape(10000, 784)
    x_test = x_test.astype('float32')
    x_test /= 255
    y_test = keras.utils.to_categorical(y_test, num_classes)

    get_custom_objects()['PermanentDropout'] = PermanentDropout
    with open(gParameters['model_file'], 'r') as fp:
        model = model_from_json(fp.read())

    model.load_weights(gParameters['weights_file'])
    model.summary()

    predicts = model.predict(x_test, batch_size=batch_size, verbose=0).flatten()
    np.savetxt("predicts.csv", predicts, delimiter=",")

if __name__ == '__main__':
    gParams = initialize_parameters()
    run(gParams)
