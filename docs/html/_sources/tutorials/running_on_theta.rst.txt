How to run CANDLE compliant code in Theta
=========================================

As mentioned above, we offer two different workflows in CANDLE: Unrolled
Parameter File (UPF) and Hyper Parameter Optimization (HPO). The UPF
workflow allows you to run parallel multi-node executions with different
parameters, while the HPO workflow evaluates the best values of the
hyperparameters based on the mlrMBO algorithm.

Running UPF on Theta
--------------------

In this tutorial, we will execute an mnist example rewritten for CANDLE.
The source code is available on `CANDLE github
repo <https://github.com/ECP-CANDLE/Candle/tree/master/examples/mnist>`__. This example assumes that you have access to the Candle_ECP project on theta.

Step 1. Create directory and checkout Supervisor & Candle repos

.. code:: bash

    $ mkdir candle_tutorial
    $ cd candle_tutorial
    $ git clone -b master https://github.com/ECP-CANDLE/Supervisor.git
    $ git clone https://github.com/ECP-CANDLE/Candle.git

Step 2. Move to upf workflow directory

::

    $ cd Supervisor/workflows/upf

Step 3. Set Env variables. In ``test/cfg-sys-1.sh``, you will need to
set ``BENCHMARK_DIR`` to point the directory that holds the example, and
``MODEL_PYTHON_SCRIPT`` to name the script you want to run.

::

    BENCHMARK_DIR=/home/hsyoo/candle_tutorial/Candle/examples/mnist # 1
    MODEL_PYTHON_SCRIPT=mnist_mlp_candle # 2

- # 1: This location should reflect your environment

- # 2: Note this requires filename without extension (such as .py)

Step 4. Set execution plan. Check ``test/upf-1.txt`` for parameter
configuration and modify as needed. This file contains multiple JSON
documents. Each JSON document will contain the command line parameters
for an individual run. For example,

::

    {"id": "test0", "epochs": 10}
    {"id": "test1", "epochs": 20}

This will invoke two instances, which will run 10 epochs and 20 epochs
respectively.

Step 5. Submit your job. You will need to set ``QUEUE``, ``PROJECT``,
``PROCS``, and ``WALLTIME``. You can configure those in ``cfg-sys-1.sh``
(see Step 3), set them as env variables, or provide them as command line
arguments (see below).

::

    $ export QUEUE=debug-cache-quad
    $ export PROJECT=myproject
    $ export PROCS=3
    $ export WALLTIME=00:10:00

    $ ./test/upf-1.sh theta

    // or

    $ QUEUE=debug-cache-quad PROJECT=myproject PROCS=3 WALLTIME=00:10:00 ./test/upf-1.sh theta

-  ``QUEUE`` refers to the system queue name. The Theta machine has
   queues named ``default``, ``debug-flat-quad``, and
   ``debug-cache-quad``. For more information, please check
   https://www.alcf.anl.gov/user-guides/job-scheduling-policy-xc40-systems#queues

-  ``PROJECT`` refers to your allocated project name. Please check
   https://www.alcf.anl.gov/user-guides/allocations, for more detail.

-  ``PROCS`` is a number of nodes. We recommend adding extra 1 node in
   addition to the number of executions in your plan. In this example,
   we set 3 (1 + 2).

-  ``WALLTIME`` refers to computing time you are requesting for
   individual node. The production queues are limited by policy. Check
   https://www.alcf.anl.gov/user-guides/job-scheduling-policy-xc40-systems#queues
   for more detail.

Step 6. Check queue status

::

    $ qstat -u user_name -f

Step 7. Review output files. After the job is completed, the result
files are available in the experiments directory.
(Supervisor/workflow/upf/experiments). For example,
``/home/hsyoo/candle_tutorial/Supervisor/workflows/upf/experiments/X000``
will contain files like below,

::

    -rw-r--r-- 1 hsyoo cobalt  2411 Aug 17 19:13 262775.cobaltlog
    -rw-r--r-- 1 hsyoo users   1179 Aug 17 18:55 cfg-sys-1.sh
    -rw-r--r-- 1 hsyoo users      7 Aug 17 18:55 jobid.txt
    -rw-r--r-- 1 hsyoo users   3310 Aug 17 19:13 output.txt
    drwxr-xr-x 4 hsyoo users    512 Aug 17 19:07 run
    -rw------- 1 hsyoo users  10863 Aug 17 18:55 swift-t-workflow.8X4.tic
    -rw-r--r-- 1 hsyoo users    677 Aug 17 18:55 turbine.log
    -rwxr--r-- 1 hsyoo users   5103 Aug 17 18:55 turbine-theta.sh
    -rw-r--r-- 1 hsyoo users     60 Aug 17 18:55 upf-1.txt
    -rw-r--r-- 1 hsyoo users   4559 Aug 17 18:55 workflow.sh.log

    hsyoo@thetalogin4:~/candle_tutorial/Supervisor/workflows/upf/experiments/X000> ls -al run/
    total 2
    drwxr-xr-x 4 hsyoo users  512 Aug 17 19:07 .
    drwxr-xr-x 3 hsyoo users 1024 Aug 17 20:33 ..
    drwxr-xr-x 3 hsyoo users  512 Aug 17 20:34 test0
    drwxr-xr-x 3 hsyoo users  512 Aug 17 19:13 test1

    hsyoo@thetalogin4:~/candle_tutorial/Supervisor/workflows/upf/experiments/X000> cat run/test0/model.log
    ... many lines omitted ...
    Epoch 10/10
    60000/60000 [==============================] - 12s - loss: 4.3824 - acc: 0.7253 - val_loss: 2.1082 - val_acc: 0.8671
    ('Test loss:', 2.1082268813190574)
    ('Test accuracy:', 0.86709999999999998)
    result: 2.10822688904

-  ``output.txt`` contains stdout and stderr of this experiment. This is
   helpful to debug errors.

-  ``run`` directory contains the output files. You will see two
   directories that are corresponding the IDs configured in upf-1.txt

-  a copy of configuration files are available so that you can trace
   what were passed to this experiment.

-  stdout of test0. After 10 epoches, validation loss was 2.1082.

Running mlrMBO based Hyperparameters Optimization (HPO) on Theta
----------------------------------------------------------------

Step 1. Create directory and checkout Supervisor & Candle repos. You can
skip this step if you already have done it in previous section.

::

    $ mkdir candle_tutorial
    $ cd candle_tutorial
    $ git clone -b master https://github.com/ECP-CANDLE/Supervisor.git
    $ git clone -b library https://github.com/ECP-CANDLE/Candle.git

Step 2. Move to mlrMBO workflow directory

::

    $ cd Supervisor/workflows/mlrMBO

Step 3. Set Env variables. In ``test/cfg-sys-1.sh``, you will need to
set ``BENCHMARK_DIR`` to point the directory that your script locates,
and ``MODEL_PYTHON_SCRIPT`` to name the script you want to run

::

    BENCHMARK_DIR=/home/hsyoo/candle_tutorial/Candle/examples/mnist # 1
    MODEL_PYTHON_SCRIPT=mnist_mlp_candle # 2

- # 1: This location should reflect your environment

- # 2: Note this requires filename without extension (such as .py)

Step 4. Config hyper parameters. In this step, we are configuring
parameter sets, which we will iteratively evaluate. For example, you can
create ``workflow/data/mnist.R`` as below.

::

    param.set <- makeParamSet(
      makeDiscreteParam("batch_size", values=c(32, 64, 128, 256, 512)),
      makeDiscreteParam("activation", values=c("relu", "sigmoid", "tanh")),
      makeDiscreteParam("optimizer", values=c("adam", "sgd", "rmsprop")),
      makeIntegerParam("epochs", lower=20, upper=20)
    )

This file should be located under your Supervisor installation. For this
tutorial, it is
``/home/hsyoo/candle_tutorial/Supervisor/workflows/mlrMBO/data``, but
again, this should reflect your environment.

In this example, we are varying four parameters: ``batch_size``,
``activation``, ``optimizer``, ``epochs``. For ``batch size``, we are
trying out 32, 64, 128, 256, and 512. For ``activation`` method, we are
exploring ``relu``, ``sigmoid``, and ``tanh``, and so on. Entire
parameter space will be 45 (5 x 3 x 3 x 1).

After creating this file, we need to point to this file in an
environment variable.

::

    $ export PARAM_SET_FILE=mnist.R

Step 5. Submit your job.

::

    $ ./test/test-1.sh mnist theta

The first argument is MODEL\_NAME. If the name is registered in
``test/cfg-prm-1.sh``, it will use the pre-configured parameter file.
Otherwise, CANDLE will use ``PARAM_SET_FILE`` we configured in step 4.

You can specify the HPO search strategy. As you can see in
``test/cfg-prm-1.sh``, you are able to config ``PROPOSE_POINTS``,
``MAX_CONCURRENT_EVALUATIONS``, ``MAX_ITERATIONS``, ``MAX_BUDGE``,
``DESIGN_SIZE``.

-  ``DESIGN_SIZE`` is a number of parameter sets that will evaluate at
   the beginning of HPO search. In this example, CANDLE will select
   random 10 parameter sets out of 45 (see Step 4, for break downs).

-  ``MAX_ITERATIONS`` is a number of iterations.

-  ``PROPOSE_POINTS`` is a number of parameter sets that CANDLE will
   evaluate in each iteration. So, if ``MAX_ITERATION=3`` and
   ``PROPOSE_POINTS=5``, CANDLE will be ended up evaluating 25 params
   (10 + 3 x 5).

-  ``MAX_BUDGET`` should be greater than total evaluations. In this
   example, 45.
