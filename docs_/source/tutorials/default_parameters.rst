Example of Parameters
==============================

::

    Importing candle utils for keras
    usage: mnist_cnn [-h] [--config_file CONFIG_FILE] [-d {f16,f32,f64}]
                    [-r RNG_SEED] [--train_bool TRAIN_BOOL]
                    [--eval_bool EVAL_BOOL] [--timeout TIMEOUT] [--gpus GPUS [GPUS ...]]
                    [-p PROFILING] [-s SAVE_PATH] [--model_name MODEL_NAME]
                    [--home_dir HOME_DIR] [--train_data TRAIN_DATA] [--val_data VAL_DATA]
                    [--test_data TEST_DATA]
                    [--output_dir OUTPUT_DIR] [--data_url DATA_URL]
                    [--experiment_id EXPERIMENT_ID] [--run_id RUN_ID]
                    [-v VERBOSE] [-l LOGFILE] [--scaling {minabs,minmax,std,none}]
                    [--shuffle SHUFFLE] [--feature_subsample FEATURE_SUBSAMPLE]
                    [--dense DENSE [DENSE ...]] [--conv CONV [CONV ...]]
                    [--locally_connected LOCALLY_CONNECTED] [-a ACTIVATION]
                    [--out_activation OUT_ACTIVATION] [--lstm_size LSTM_SIZE [LSTM_SIZE ...]]
                    [--recurrent_dropout RECURRENT_DROPOUT] [--dropout DROPOUT] [--pool POOL]
                    [--batch_normalization BATCH_NORMALIZATION] [--loss LOSS]
                    [--optimizer OPTIMIZER] [--metrics METRICS] [-e EPOCHS]
                    [-z BATCH_SIZE] [-lr LEARNING_RATE]
                    [--early_stop EARLY_STOP] [--momentum MOMENTUM]
                    [--initialization {constant,uniform,normal,glorot_uniform,glorot_normal,lecun_uniform,he_normal}]
                    [--val_split VAL_SPLIT] [--train_steps TRAIN_STEPS] [--val_steps VAL_STEPS]
                    [--test_steps TEST_STEPS] [--train_samples TRAIN_SAMPLES] [--val_samples VAL_SAMPLES]
                    [--clr_flag CLR_FLAG] [--clr_mode {trng1,trng2,exp}] [--clr_base_lr CLR_BASE_LR]
                    [--clr_max_lr CLR_MAX_LR] [--clr_gamma CLR_GAMMA]
                    [--ckpt_restart_mode {off,auto,required}]
                    [--ckpt_checksum CKPT_CHECKSUM] [--ckpt_skip_epochs CKPT_SKIP_EPOCHS]
                    [--ckpt_directory CKPT_DIRECTORY] [--ckpt_save_best CKPT_SAVE_BEST]
                    [--ckpt_save_best_metric CKPT_SAVE_BEST_METRIC]
                    [--ckpt_save_weights_only CKPT_SAVE_WEIGHTS_ONLY]
                    [--ckpt_save_interval CKPT_SAVE_INTERVAL]
                    [--ckpt_keep_mode {linear,exponential}]
                    [--ckpt_keep_limit CKPT_KEEP_LIMIT]MNIST CNN exampleoptional arguments:
    -h, --help            show this help message and exit
    --config_file CONFIG_FILE
                            specify model configuration file
    -d {f16,f32,f64}, --data_type {f16,f32,f64}
                            default floating point.
    -r RNG_SEED, --rng_seed RNG_SEED
                            random number generator seed.
    --train_bool TRAIN_BOOL
                            train model. (default: True)
    --eval_bool EVAL_BOOL
                            evaluate model (use it for inference).
    --timeout TIMEOUT     seconds allowed to train model (default: no timeout).
    --gpus GPUS [GPUS ...]
                            set IDs of GPUs to use.
    -p PROFILING, --profiling PROFILING
                            Turn profiling on or off. (default: False)
    -s SAVE_PATH, --save_path SAVE_PATH
                            file path to save model snapshots.
    --model_name MODEL_NAME
                            specify model name to use when building filenames for saving.
    --home_dir HOME_DIR   set home directory.
    --train_data TRAIN_DATA
                            training data filename.
    --val_data VAL_DATA   validation data filename.
    --test_data TEST_DATA
                            testing data filename.
    --output_dir OUTPUT_DIR
                            output directory.
    --data_url DATA_URL   set data source url.
    --experiment_id EXPERIMENT_ID
                            set the experiment unique identifier. (default: EXP000)
    --run_id RUN_ID       set the run unique identifier. (default: RUN000)
    -v VERBOSE, --verbose VERBOSE
                            increase output verbosity. (default: False)
    -l LOGFILE, --logfile LOGFILE
                            log file (default: None)
    --scaling {minabs,minmax,std,none}
                            type of feature scaling; 'minabs': to [-1,1]; 'minmax': to [0,1],
                            'std': standard unit normalization; 'none': no normalization.
    --shuffle SHUFFLE     randomly shuffle data set (produces different training and testing
                            partitions each run depending on the seed) (default: False)
    --feature_subsample FEATURE_SUBSAMPLE
                            number of features to randomly sample from each category
                            (cellline expression, drug descriptors, etc), 0 means using all features
    --dense DENSE [DENSE ...]
                            number of units in fully connected layers in an integer array.
    --conv CONV [CONV ...]
                            integer array describing convolution layers:
                            conv1_filters, conv1_filter_len, conv1_stride, conv2_filters, conv2_filter_len, conv2_stride ....
    --locally_connected LOCALLY_CONNECTED
                            use locally connected layers instead of convolution layers.
    -a ACTIVATION, --activation ACTIVATION
                            keras activation function to use in inner layers: relu, tanh, sigmoid...
    --out_activation OUT_ACTIVATION
                            keras activation function to use in out layer: softmax, linear, ...
    --lstm_size LSTM_SIZE [LSTM_SIZE ...]
                            integer array describing size of LSTM internal state per layer.
    --recurrent_dropout RECURRENT_DROPOUT
                            ratio of recurrent dropout.
    --dropout DROPOUT     ratio of dropout used in fully connected layers.
    --pool POOL           pooling layer length.
    --batch_normalization BATCH_NORMALIZATION
                            use batch normalization.
    --loss LOSS           keras loss function to use: mse, ...
    --optimizer OPTIMIZER
                            keras optimizer to use: sgd, rmsprop, ...
    --metrics METRICS     metrics to evaluate performance: accuracy, ...
    -e EPOCHS, --epochs EPOCHS
                            number of training epochs.
    -z BATCH_SIZE, --batch_size BATCH_SIZE
                            batch size.
    -lr LEARNING_RATE, --learning_rate LEARNING_RATE
                            overrides the learning rate for training.
    --early_stop EARLY_STOP
                            activates keras callback for early stopping of training in
                            function of the monitored variable specified.
    --momentum MOMENTUM   overrides the momentum to use in the SGD optimizer when training.
    --initialization {constant,uniform,normal,glorot_uniform,glorot_normal,lecun_uniform,he_normal}
                            type of weight initialization; 'constant': to 0;
                            'uniform': to [-0.05,0.05], 'normal': mean 0, stddev 0.05;
                            'glorot_uniform': [-lim,lim] with lim = sqrt(6/(fan_in+fan_out));
                            'lecun_uniform' : [-lim,lim] with lim = sqrt(3/fan_in);
                            'he_normal' : mean 0, stddev sqrt(2/fan_in).
    --val_split VAL_SPLIT
                            fraction of data to use in validation.
    --train_steps TRAIN_STEPS
                            overrides the number of training batches per epoch if set to nonzero.
    --val_steps VAL_STEPS
                            overrides the number of validation batches per epoch if set to nonzero.
    --test_steps TEST_STEPS
                            overrides the number of test batches per epoch if set to nonzero.
    --train_samples TRAIN_SAMPLES
                            overrides the number of training samples if set to nonzero.
    --val_samples VAL_SAMPLES
                            overrides the number of validation samples if set to nonzero.
    --clr_flag CLR_FLAG   CLR flag (boolean).
    --clr_mode {trng1,trng2,exp}
                            CLR mode (default: trng1).
    --clr_base_lr CLR_BASE_LR
                            Base lr for cycle lr.
    --clr_max_lr CLR_MAX_LR
                            Max lr for cycle lr.
    --clr_gamma CLR_GAMMA
                            Gamma parameter for learning cycle LR.
    --ckpt_restart_mode {off,auto,required}
                            Mode to restart from a saved checkpoint file,
                            choices are 'off', 'auto', 'required'. (default: auto)
    --ckpt_checksum CKPT_CHECKSUM
                            Checksum the restart file after read+write. (default: False)
    --ckpt_skip_epochs CKPT_SKIP_EPOCHS
                            Number of epochs to skip before saving epochs. (default: 0)
    --ckpt_directory CKPT_DIRECTORY
                            Base directory in which to save checkpoints. (default: ./save)
    --ckpt_save_best CKPT_SAVE_BEST
                            Toggle saving best model. (default: True)
    --ckpt_save_best_metric CKPT_SAVE_BEST_METRIC
                            Metric for determining when to save best model. (default: val_loss)
    --ckpt_save_weights_only CKPT_SAVE_WEIGHTS_ONLY
                            Toggle saving only weights (not optimizer) (NYI). (default: False)
    --ckpt_save_interval CKPT_SAVE_INTERVAL
                            Interval to save checkpoints. (default: 0)
    --ckpt_keep_mode {linear,exponential}
                            Checkpoint saving mode, choices are 'linear' or 'exponential'. (default: linear)
    --ckpt_keep_limit CKPT_KEEP_LIMIT
                            Limit checkpoints to keep. (default: 1000000)

::
