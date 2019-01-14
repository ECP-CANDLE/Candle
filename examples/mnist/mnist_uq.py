# add candle_keras library in path
import os
import sys
file_path = os.path.dirname(os.path.realpath(__file__))
lib_path = os.path.abspath(os.path.join(file_path, '..', '..', 'common'))
sys.path.append(lib_path)

import candle_keras as candle

# thread optimization
candle.set_parallelism_threads()

# custom parameters
additional_definitions = [
    {'name': 'model_file', 'default': 'checkpoint.model.json'},
    {'name': 'weights_file', 'default': 'checkpoint.weights.h5'},
    {'name': 'dropout', 'type': float, 'default': 0 }
]
required = None

class MNIST(candle.Benchmark):
    def set_locals(self):
        if required is not None:
            self.required = set(required)
        if additional_definitions is not None:
            self.additional_definitions = additional_definitions

