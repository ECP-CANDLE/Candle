Example of Parameters
==============================

::

    usage: mnist_mlp [-h] [-v VERBOSE] [-l LOGFILE] [-s SAVE_PATH]
                    [--model_file MODEL_FILE] [-d {f16,f32,f64}]
                    [--dense DENSE [DENSE ...]] [-r RNG_SEED] [-e EPOCHS]
                    [-z BATCH_SIZE] [--config_file CONFIG_FILE]
                    [--train_bool TRAIN_BOOL] [--eval_bool EVAL_BOOL]
                    [--timeout TIMEOUT] [--home_dir HOME_DIR]
                    [--train_data TRAIN_DATA] [--test_data TEST_DATA]
                    [--output_dir OUTPUT_DIR] [--data_url DATA_URL]
                    [--experiment_id EXPERIMENT_ID] [--run_id RUN_ID]
                    [--conv CONV [CONV ...]]
                    [--locally_connected LOCALLY_CONNECTED] [-a ACTIVATION]
                    [--out_activation OUT_ACTIVATION]
                    [--lstm_size LSTM_SIZE [LSTM_SIZE ...]]
                    [--recurrent_dropout RECURRENT_DROPOUT] [--drop DROP]
                    [--pool POOL] [--batch_normalization BATCH_NORMALIZATION]
                    [--loss LOSS] [--optimizer OPTIMIZER] [--metrics METRICS]
                    [--scaling {minabs,minmax,std,none}] [--shuffle SHUFFLE]
                    [--feature_subsample FEATURE_SUBSAMPLE]
                    [--learning_rate LEARNING_RATE]
                    [--initialization {constant,uniform,normal,glorot_uniform,lecun_uniform,he_normal}]
                    [--val_split VAL_SPLIT] [--train_steps TRAIN_STEPS]
                    [--val_steps VAL_STEPS] [--test_steps TEST_STEPS]
                    [--train_samples TRAIN_SAMPLES] [--val_samples VAL_SAMPLES]
                    [--gpus [GPUS [GPUS ...]]]

    MNIST example

    optional arguments:
    -h, --help            show this help message and exit
    -v VERBOSE, --verbose VERBOSE
                            increase output verbosity (default: None)
    -l LOGFILE, --log LOGFILE
                            log file (default: None)
    -s SAVE_PATH, --save_path SAVE_PATH
                            file path to save model snapshots
    --model_file MODEL_FILE
                            specify trained model Pickle file
    -d {f16,f32,f64}, --data_type {f16,f32,f64}
                            default floating point
    --dense DENSE [DENSE ...]
                            number of units in fully connected layers in an
                            integer array
    -r RNG_SEED, --rng_seed RNG_SEED
                            random number generator seed
    -e EPOCHS, --epochs EPOCHS
                            number of training epochs
    -z BATCH_SIZE, --batch_size BATCH_SIZE
                            batch size
    --config_file CONFIG_FILE
                            specify model configuration file
    --train_bool TRAIN_BOOL
                            train model (default: True)
    --eval_bool EVAL_BOOL
                            evaluate model (use it for inference)
    --timeout TIMEOUT     seconds allowed to train model (default: no timeout)
    --home_dir HOME_DIR   set home directory
    --train_data TRAIN_DATA
                            training data filename
    --test_data TEST_DATA
                            testing data filename
    --output_dir OUTPUT_DIR
                            output directory
    --data_url DATA_URL   set data source url
    --experiment_id EXPERIMENT_ID
                            set the experiment unique identifier (default: EXP000)
    --run_id RUN_ID       set the run unique identifier (default: RUN000)
    --conv CONV [CONV ...]
                            integer array describing convolution layers:
                            conv1_filters, conv1_filter_len, conv1_stride,
                            conv2_filters, conv2_filter_len, conv2_stride ...
    --locally_connected LOCALLY_CONNECTED
                            use locally connected layers instead of convolution
                            layers
    -a ACTIVATION, --activation ACTIVATION
                            keras activation function to use in inner layers:
                            relu, tanh, sigmoid...
    --out_activation OUT_ACTIVATION
                            keras activation function to use in out layer:
                            softmax, linear, ...
    --lstm_size LSTM_SIZE [LSTM_SIZE ...]
                            integer array describing size of LSTM internal state
                            per layer
    --recurrent_dropout RECURRENT_DROPOUT
                            ratio of recurrent dropout
    --drop DROP           ratio of dropout used in fully connected layers
    --pool POOL           pooling layer length
    --batch_normalization BATCH_NORMALIZATION
                            use batch normalization
    --loss LOSS           keras loss function to use: mse, ...
    --optimizer OPTIMIZER
                            keras optimizer to use: sgd, rmsprop, ...
    --metrics METRICS     metrics to evaluate performance: accuracy, ...
    --scaling {minabs,minmax,std,none}
                            type of feature scaling; 'minabs': to [-1,1];
                            'minmax': to [0,1], 'std': standard unit
                            normalization; 'none': no normalization
    --shuffle SHUFFLE     randomly shuffle data set (produces different training
                            and testing partitions each run depending on the seed)
                            (default: False)
    --feature_subsample FEATURE_SUBSAMPLE
                            number of features to randomly sample from each
                            category (cellline expression, drug descriptors, etc),
                            0 means using all features
    --learning_rate LEARNING_RATE
                            overrides the learning rate for training
    --initialization {constant,uniform,normal,glorot_uniform,lecun_uniform,he_normal}
                            type of weight initialization; 'constant': to 0;
                            'uniform': to [-0.05,0.05], 'normal': mean 0, stddev
                            0.05; 'glorot_uniform': [-lim,lim] with lim =
                            sqrt(6/(fan_in+fan_out)); 'lecun_uniform' : [-lim,lim]
                            with lim = sqrt(3/fan_in); 'he_normal' : mean 0,
                            stddev sqrt(2/fan_in)
    --val_split VAL_SPLIT
                            fraction of data to use in validation
    --train_steps TRAIN_STEPS
                            overrides the number of training batches per epoch if
                            set to nonzero
    --val_steps VAL_STEPS
                            overrides the number of validation batches per epoch
                            if set to nonzero
    --test_steps TEST_STEPS
                            overrides the number of test batches per epoch if set
                            to nonzero
    --train_samples TRAIN_SAMPLES
                            overrides the number of training samples if set to
                            nonzero
    --val_samples VAL_SAMPLES
                            overrides the number of validation samples if set to
                            nonzero
    --gpus [GPUS [GPUS ...]]
                            set IDs of GPUs to use (default: [])

::