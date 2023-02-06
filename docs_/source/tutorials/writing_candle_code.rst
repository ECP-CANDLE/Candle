The CANDLE library enables users to run their own deep learning code on
a set of supported high-performance computers. With the current version
of CANDLE, users will be able to run a hyperparameter optimization task
(mlrMBO workflow) or a parallel execution task (upf workflow). In order
to run those workflows, users are required to implement a class and
methods (will be explained in section 1) and follow some procedures (see
section 2) for each workflow. This user guide will provide an overview
of these code structures and an explanation of parameters or variables
as needed.

How to write CANDLE compliant deep learning code
================================================

Minimum requirements
--------------------

CANDLE compliant code requires you to create a Python class and
implement two methods, ``run()`` and ``initialize_parameters()``. The
base class already provides common parameters such as ``batch_size``,
``epoch``, etc. and enables you to register additional parameters as
needed. In addition to that, you can mandate that some parameters exist
and have values, if needed.

Base Class
~~~~~~~~~~

The CANDLE library provides a base class (``candle.Benchmark``), which
you will extend to configure your parameters. If you don’t have any
additional parameters to define, you can use this code as is (see `MNIST
example <https://github.com/ECP-CANDLE/Candle/blob/master/examples/mnist/mnist.py>`__).

.. code:: python

    # mnist.py
    additional_definitions = None
    required = None

    class MNIST(candle.Benchmark):  # 1
        def set_locals(self):
            if required is not None:
                self.required = set(required)
            if additional_definitions is not None:
                self.additional_definitions = additional_definitions

- # 1: Create a new class by extending ``candle.Benchmark``

Additional Parameters
^^^^^^^^^^^^^^^^^^^^^

You can add a parameter like `this
example <https://github.com/ECP-CANDLE/Benchmarks/blob/release_01/Pilot1/TC1/tc1.py#L16-L58>`__.
The example illustrates how to define an integer type parameter,
``pool`` with minimum description. This uses Python’s argparse library.

::

    additional_definitions = [{
        'name':'pool', # 1
        'nargs':'+', # 2
        'type': int, # 3
        'help':'network structure of shared layer' # 4
    },
    ]

- # 1: required. Name of parameter.

- # 2: optional. The number of command-line arguments.

- # 3: required. The type to which the command-line arguments should be converted.

- # 4: optional. A brief description of what the argument does.

Mandatory parameters
^^^^^^^^^^^^^^^^^^^^

If you would like to make some common parameters mandatory, you will
need to define a ``required`` variable, a list of parameter names, and
pass it to the definition of your class.

::

    required = [
        'data_url',
        'epochs',
        'batch_size',
        'pool',
        'save'
    ]

Thread Optimization
^^^^^^^^^^^^^^^^^^^

On some high-performance computing machines like ``Theta``, the
performance will be greatly improved if we let CANDLE handle threads.
So, it is generally recommended to have code like lines 14 to 21 in
`this
example <https://github.com/ECP-CANDLE/Candle/blob/master/examples/mnist/mnist.py#L10-L11>`__,
which sets appropriate parameters in a tensorflow session.

::

    # thread optimization
    import os
    from tensorflow.keras import backend as K
    if K.backend() == 'tensorflow' and 'NUM_INTRA_THREADS' in os.environ:
        import tensorflow as tf
        sess = tf.Session(config=tf.ConfigProto(inter_op_parallelism_threads=int(os.environ['NUM_INTER_THREADS']),
                                                intra_op_parallelism_threads=int(os.environ['NUM_INTRA_THREADS'])))
        K.set_session(sess)

initialize\_parameters Method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the ``initialize_parameters()`` method, we will instantiate the base
class, and finally build an argument parser to recognize your customized
parameters in addition to the default parameters (
``default_utils.initialize_parameters()``). The
``initialize_parameters()`` method should return a python dictionary,
which will be passed to the ``run()`` method.

.. code:: python

    # this is a part of mnist_mlp_candle.py

    import mnist
    import candle

    def initialize_parameters():
        mnist_common = mnist.MNIST(mnist.file_path,
            'mnist_params.txt',  # 4
            'keras',
            prog='mnist_mlp',
            desc='MNIST example'
        )  # 1

        # Initialize parameters
        gParameters = default_utils.initialize_parameters(mnist_common)  # 2
        ..

        return gParameters  # 3

- # 1: instantiate base class

- # 2: build argument parser

- # 3: initialize\_parameters() should return a dictionary

- # 4: a file that contains default values for the given parameters. See below for example.

::

    [Global_Params]
    epochs=20
    batch_size=128
    activation='relu'
    optimizer='rmsprop'

When parameters are not overwritten by workflows, their values will be
used as defaults.

Run Method
~~~~~~~~~~

You can place your deep learning code in the ``run()`` method. Your
parameters are accessible in the input dictionary like
``gParameters['batch_size']``.

We have an
`example <https://github.com/ECP-CANDLE/Candle/blob/master/examples/mnist/mnist_mlp_candle.py>`__
that converted a simple MNIST neural net ``mnist_mlp.py`` provided by
`Keras
Team <https://github.com/keras-team/keras/blob/master/examples/mnist_mlp.py>`__
into CANDLE compliant form. In this example, you will see how the actual
neural network was transplanted in the ``run()`` method.

Finally, the ``run()`` method returns a keras history object. This can
be omitted for upf workflow, but required for HPO workflow. (see upf and
mbo explanation below)

.. code:: python

    # this is a part of mnist_mlp_candle.py

    def run(gParameters): # 1
        ##########################################
        # Your DL start here. See mnist_mlp.py   #
        ##########################################

        ...

        batch_size = gParameters['batch_size']
        epochs = gParameters['epochs']

        ...

        model.compile(loss='categorical_crossentropy',
                    optimizer=optimizer,
                    metrics=['accuracy'])

        history = model.fit(x_train, y_train,
                            batch_size=batch_size,
                            epochs=epochs,
                            verbose=1,
                            validation_data=(x_test, y_test))
        ##########################################
        # End of mnist_mlp.py ####################
        ##########################################
      return history # 2

- # 1: run method receives parameter dictionary

- # 2: returns keras history object or None.

   -  The mlrMBO workflow requires returning a keras history object so
      that the workflow can evaluate the model. The upf workflow does
      not have the evaluation process, so you can return ``None``.
