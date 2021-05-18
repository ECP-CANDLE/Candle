CANDLE Shared Installation
==========================

Terminology and scope
---------------------

In addition to the CANDLE shared installation being a ready-to-use, central installation of CANDLE, it is further a set of scripts that adds to the functionality of CANDLE and makes it easier to use for new users. For brevity, below these scripts will be called the "wrapper scripts" or "wrappers," as they are essentially wrappers around the Supervisor/Benchmarks codebase with the aim of improving functionality while leaving the codebase as untouched as possible. These scripts should not interfere in any way with how CANDLE is currently being run; these are only enhancements. They are currently set up and tested on Biowulf and Summit.

The source code of the wrapper scripts is currently located `here <https://github.com/fnlcr-bids-sdsi/candle_wrappers>`__. This contains code that (1) helps to set up and test these
scripts alongside new clones of the
`Supervisor <https://github.com/ECP-CANDLE/Supervisor/tree/develop>`__
and
`Benchmarks <https://github.com/ECP-CANDLE/Benchmarks/tree/develop>`__
repositories, and (2) adds various features to CANDLE. The documentation
for setup (#1) can be found `here <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/README.md>`__; the documentation
for usage (#2) is below.

Overview of wrapper scripts functionality
-----------------------------------------

For users
~~~~~~~~~

-  **Run CANDLE as a central installation**. E.g., instead of cloning
   the Supervisor and Benchmarks repos as usual and then running a
   Supervisor workflow directly in the
   ``Supervisor/workflows/<WORKFLOW>/test`` directory, you would go to
   any arbitrary directory on the filesystem, create or edit a single
   text file (“input file”), and call CANDLE with the input file as an
   argument. This is similar to how other large HPC-enabled software
   packages are run, e.g., software for calculating electronic structure
-  **Edit only a single text input file** to modify *everything* you
   would need to set in order to run a job, e.g., workflow type,
   hyperparameter space, number of workers, walltime, “default model”
   settings, etc.
-  **Minimally modify a bare model script**, e.g., no need to add
   ``initialize_parameters()`` and ``run()`` functions (whose content
   occassionally changes) to a new model that you’d like to run using
   CANDLE. The wrapper scripts still work for canonically
   CANDLE-compliant (i.e., "candelized") model scripts such as the already-written main
   ``.py`` files used to run the benchmarks. Additional benefits of only
   minimally modifying a bare model script:

   -  The output of the model using each hyperparameter set is put in
      its own file, ``subprocess_out_and_err.txt``
   -  Custom environments can be automatically defined for running the
      model script using e.g. the keywords ``supp_modules``,
      ``python_bin_path``, ``exec_python_module``, ``supp_pythonpath``,
      described further in the `section on input file
      keywords <#control-section>`__ below for keywords noted to apply
      for “minimal CANDLE-compliance only”

-  **Run model scripts written in other languages** such as ``R`` and
   ``bash`` (tested on Biowulf but not yet tested on Summit); minimal
   additions to the wrapper scripts are needed for adding additional
   language support
-  **Perform a consistent workflow for testing and production jobs**,
   i.e.:

   1. *Testing:* Using ``candle submit-job <INPUT-FILE>`` with the input
      file keyword setting of ``run_workflow=0`` on an interactive node
      (e.g.,
      ``bsub -W 1:00 -nnodes 1 -P med106 -q debug -Is /bin/bash``) for
      testing modifications to a model script
   2. *Production:* Using ``candle submit-job <INPUT-FILE>`` this time
      with the default keyword setting of ``run_workflow=1`` on a login
      node for submitting a CANDLE job as usual

   -  As long as the wrapper scripts are set up properly and your model
      script runs successfully using ``run_workflow=0``, you can be
      pretty confident that submitting the job using ``run_workflow=1``
      will pick up and run without dying

For developers
~~~~~~~~~~~~~~

-  **Modify only a single file whenever the CANDLE-compliance procedure changes**
   (`candle_compliant_wrapper.py <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/commands/submit-job/candle_compliant_wrapper.py>`__). E.g., if the
   benchmarks used the minimal modification to the main ``.py`` files
   rather than the traditional CANDLE-compliance procedure, there would
   be no need to update every benchmark whenever the CANDLE-compliance
   procedure changed
-  **Edit only a single file in order to make system-specific changes**
   (`preprocess.py <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/commands/submit-job/preprocess.py>`__)
   such as custom
   modification to the ``$TURBINE_LAUNCH_OPTIONS`` variable; no need to
   edit each Supervisor workflow’s ``workflow.sh`` file

Loading the ``candle`` module
-----------------------------

We are currently getting CANDLE approved as user-managed software on
Summit. Once it is approved, we will be able to load the ``candle``
module via ``module load candle``. In the interim, do this instead:

.. code:: bash

   source /gpfs/alpine/med106/world-shared/candle/env_for_lmod-tf2.sh

Both methods primarily do the following:

-  Sets the ``$CANDLE`` variable to
   ``/gpfs/alpine/med106/world-shared/candle/tf2`` in order to set the
   top-level directory of the entire CANDLE file tree, including the
   ``Supervisor``, ``Benchmarks``, and ``wrappers`` GitHub repositories
-  Appends ``$CANDLE/wrappers/bin`` to ``$PATH`` in order to be able to
   run ``candle`` from the command line
-  Sets the ``$SITE`` variable to ``summit-tf2`` in order to specify the
   HPC system and environment
-  Appends ``$CANDLE/Benchmarks/common`` to ``$PYTHONPATH`` to allow one
   to write a Python model script in an arbitrary directory and to be
   able to run ``import candle`` in the script

Quick-start examples (for Summit)
---------------------------------

Step 1: Setup
~~~~~~~~~~~~~

.. code:: bash

   # Load the CANDLE module; do the following for the time being in lieu of "module load candle", as we are currently getting CANDLE approved as user-managed software
   source /gpfs/alpine/med106/world-shared/candle/env_for_lmod-tf2.sh

   # Enter a possibly empty directory that is completely outside of the Supervisor/Benchmarks repositories on the Alpine filesystem, such as $MEMBERWORK
   cd /gpfs/alpine/med106/scratch/weismana/notebook/2020-11-13/testing_candle_installation

Step 2: Run sample CANDLE-compliant model scripts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This refers to model scripts that the developers refer to as
“CANDLE-compliant” or "candelized" as usual.

NT3 using UPF (CANDLE-compliant model scripts)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: bash

   # Import the UPF example (one file will be copied over)
   candle import-template upf

   # Submit the job to the queue
   candle submit-job upf_example.in

NT3 using mlrMBO (CANDLE-compliant model scripts)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: bash

   # Import the mlrMBO example (two files will be copied over)
   candle import-template mlrmbo

   # Submit the job to the queue
   candle submit-job mlrmbo_example.in

Step 3: Run sample **non**-CANDLE-compliant model scripts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This refers to model scripts that have gone from “bare” (e.g., one
downloaded directly from the Internet) to “minimally modified,” a
process described
`below <#how-to-minimally-modify-a-bare-model-script-for-use-with-the-wrapper-scripts>`__.

MNIST using UPF (non-CANDLE-compliant model scripts)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: bash

   # Pre-fetch the MNIST data since Summit compute nodes can't access the Internet (this has nothing to do with the wrapper scripts)
   mkdir candle_generated_files
   /gpfs/alpine/world-shared/med106/sw/condaenv-200408/bin/python -c "from keras.datasets import mnist; import os; (x_train, y_train), (x_test, y_test) = mnist.load_data(os.path.join(os.getcwd(), 'candle_generated_files', 'mnist.npz'))"

   # Import the grid example (two files will be copied over)
   candle import-template grid

   # Submit the job to the queue
   candle submit-job grid_example.in

NT3 using mlrMBO (non-CANDLE-compliant model scripts)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code:: bash

   # Import the bayesian example (two files will be copied over)
   candle import-template bayesian

   # Submit the job to the queue
   candle submit-job bayesian_example.in

How to minimally modify a bare model script for use with the wrapper scripts
----------------------------------------------------------------------------

1. Set the hyperparameters in the model script using a dictionary called
   ``candle_params``
2. Ensure somewhere near the end of the script either the normal
   ``history`` object is defined or a metric of how well the
   hyperparameter set performed (a value you want to minimize, such as
   the loss evaluated on a test set) is returned as a number in the
   ``candle_value_to_return`` variable

This is demonstrated in
`$CANDLE/wrappers/examples/summit-tf2/grid/mnist_mlp.py <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/grid/mnist_mlp.py>`__.

Running a non-CANDLE-compliant model on its own, outside of Supervisor
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One drawback to minimally modifying a bare model script as opposed to
making it fully CANDLE-compliant is that the former cannot generally run
standalone (which you should only do on an interactive node), e.g.,
``python my_model_script.py``. There are two simple ways to handle this:

1. Use the recommended workflow of setting ``run_workflow=0`` and then
   running the model script using ``candle submit-job my_input_file.in``
2. Run ``bash run_candle_model_standalone.sh``. Explanation: The first
   time a minimally CANDLE-compliant model script is run, using either
   setting of ``run_workflow``, a file called
   ``run_candle_model_standalone.sh`` is created, which runs
   ``candle_compliant_wrapper.py`` using Python, just as you’re desiring
   to run a fully CANDLE-compliant model script using Python in this
   situation. (As some environment variables are required to be set in
   ``candle_compliant_wrapper.py`` and the files it calls,
   ``run_candle_model_standalone.sh`` also sets some environment
   variables.)

Aside from not needing to make a model script fully CANDLE-compliant,
the usual advantages of running minimally CANDLE-compliant scripts like
this apply here, e.g., model scripts can be written in other languages
and a custom environment can be automatically defined via, e.g.,
``supp_modules``, ``python_bin_path``, ``exec_python_module``,
``supp_pythonpath``.

As usual for miminally CANDLE-compliant model scripts, the output of the
script is placed in ``subprocess_out_and_err.txt``.

Input file format
-----------------

The input file should contain three sections: ``&control``,
``&default_model``, and ``&param_space``. Each section should start with
this header on its own line and end with ``/`` on its own line. (This
input file format is based on the `Quantum
Espresso <https://www.quantum-espresso.org/>`__ electronic structure
software.) Four sample input files, corresponding to the four examples
in the `quick-start examples
above <#quick-start-examples-for-summit>`__, are here:
`upf <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/upf/upf_example.in>`__,
`mlrmbo <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/mlrmbo/mlrmbo_example.in>`__,
`grid <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/grid/grid_example.in>`__,
`bayesian <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/bayesian/bayesian_example.in>`__.
Spaces at the beginnings of the content-containing lines are optional
but are recommended for readability.

``&control`` section
~~~~~~~~~~~~~~~~~~~~

The ``&control`` section contains all settings aside from those
specified in the ``&default_model`` and ``&param_space`` sections
(detailed below) in the format ``keyword = value``. Spaces around the
``=`` sign are optional, and each keyword setting should be on its own
line. Each ``value`` ultimately gets interpreted by ``bash`` and hence
is taken to be a string by default; thus, quotes are not necessary for
string ``value``\ s.

Here is a list of possible ``keyword``\ s and their default ``value``\ s
(if ``None``, then the keyword is required), as specified in
`$CANDLE/wrappers/site-specific_settings.sh <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/site-specific_settings.sh>`__:

+-----------------------+-----------------------+-----------------------+
| ``keyword``           | Default ``value``     | Notes                 |
+=======================+=======================+=======================+
| ``model_script``      | ``None``              | Full path to the      |
|                       |                       | model script          |
+-----------------------+-----------------------+-----------------------+
| ``workflow``          | ``None``              | Currently only        |
|                       |                       | ``grid`` and          |
|                       |                       | ``bayesian`` are      |
|                       |                       | enabled (which get    |
|                       |                       | mapped to the UPF and |
|                       |                       | mlrMBO Supervisor     |
|                       |                       | workflows)            |
+-----------------------+-----------------------+-----------------------+
| ``project``           | ``None``              | OLCF project to use,  |
|                       |                       | e.g., ``med106``      |
+-----------------------+-----------------------+-----------------------+
| ``walltime``          | ``00:05``             | In ``HH:MM`` format   |
|                       |                       | as is used on Summit  |
+-----------------------+-----------------------+-----------------------+
| ``nworkers``          | ``1``                 | workers=GPUs. The     |
|                       |                       | number of nodes used  |
|                       |                       | on Summit             |
|                       |                       | will be               |
|                       |                       | ceil((``nworkers``    |
|                       |                       | + (1 (``grid``) or 2  |
|                       |                       | (``bayesian``))) /    |
|                       |                       | 6),                   |
|                       |                       | after which 0-5       |
|                       |                       | workers will be added |
|                       |                       | in order to utilize   |
|                       |                       | all GPUs on the nodes |
+-----------------------+-----------------------+-----------------------+
| ``dl_backend``        | ``keras``             | Valid backends are    |
|                       |                       | ``keras`` and         |
|                       |                       | ``pytorch``           |
+-----------------------+-----------------------+-----------------------+
| ``supp_modules``      | Empty string          | Supplementary         |
|                       |                       | ``module``\ s to load |
|                       |                       | prior to executing a  |
|                       |                       | model script (minimal |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``python_bin_path``   | Empty string          | Actual Python version |
|                       |                       | to use if not the one |
|                       |                       | set in                |
|                       |                       | ``env-$SITE.sh``      |
|                       |                       | (minimal              |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``exec_python_module``| Empty string          | Actual Python         |
|                       |                       | ``module`` to use if  |
|                       |                       | not the Python        |
|                       |                       | version set in        |
|                       |                       | ``env-$SITE.sh``      |
|                       |                       | (minimal              |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``supp_pythonpath``   | Empty string          | ``:``-delimited list  |
|                       |                       | of ``$PYTHONPATH``    |
|                       |                       | settings to append to |
|                       |                       | the ``$PYTHONPATH``   |
|                       |                       | variable (minimal     |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``extra_script_args`` | Empty string          | Extra arguments to    |
|                       |                       | the ``python`` or     |
|                       |                       | ``R`` programs to use |
|                       |                       | when calling the      |
|                       |                       | corresponding model   |
|                       |                       | script (minimal       |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``exec_r_module``     | Empty string          | Actual R ``module``   |
|                       |                       | to use if not the R   |
|                       |                       | version set in        |
|                       |                       | ``env-$SITE.sh``      |
|                       |                       | (minimal              |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``supp_r_libs``       | Empty string          | Full path to a        |
|                       |                       | supplementary         |
|                       |                       | ``$R_LIBS`` library   |
|                       |                       | to use (minimal       |
|                       |                       | CANDLE-compliance     |
|                       |                       | only)                 |
+-----------------------+-----------------------+-----------------------+
| ``run_workflow``      | 1                     | 0 will run your model |
|                       |                       | script once using the |
|                       |                       | default model         |
|                       |                       | parameters on the     |
|                       |                       | current node (so only |
|                       |                       | use this on an        |
|                       |                       | interactive node); 1  |
|                       |                       | will run the actual   |
|                       |                       | Supervisor workflow,  |
|                       |                       | submitting the job to |
|                       |                       | the queue as usual    |
+-----------------------+-----------------------+-----------------------+
| ``dry_run``           | 0                     | 1 will set up the job |
|                       |                       | but not execute it so |
|                       |                       | that you can examine  |
|                       |                       | the settings files    |
|                       |                       | generated in the      |
|                       |                       | submission directory; |
|                       |                       | 0 will run the job as |
|                       |                       | usual                 |
+-----------------------+-----------------------+-----------------------+
| ``queue``             | ``batch``             | Partition to use for  |
|                       |                       | the CANDLE job        |
+-----------------------+-----------------------+-----------------------+
| ``design_size``       | `Not yet              | ``bayesian`` workflow |
|                       | preprocessed <#c      | only; total number of |
|                       | ontribution-ideas>`__ | points to sample      |
|                       |                       | within the            |
|                       |                       | hyperparameter space  |
|                       |                       | prior to running the  |
|                       |                       | `mlrMBO               |
|                       |                       | algorithm <https://cr |
|                       |                       | an.r-project.org/web/ |
|                       |                       | packages/mlrMBO/vigne |
|                       |                       | ttes/mlrMBO.html>`__. |
|                       |                       | E.g.,                 |
|                       |                       | ``design_size = 9``.  |
|                       |                       | Note that this must   |
|                       |                       | be greater than or    |
|                       |                       | equal to the largest  |
|                       |                       | number of possible    |
|                       |                       | values for any        |
|                       |                       | discrete              |
|                       |                       | hyperparameter        |
|                       |                       | specified in the      |
|                       |                       | ``&param_space``      |
|                       |                       | section. A reasonable |
|                       |                       | value for this (and   |
|                       |                       | for                   |
|                       |                       | ``propose_points``,   |
|                       |                       | below) is 15-20       |
+-----------------------+-----------------------+-----------------------+
| ``propose_points``    | `Not yet              | ``bayesian`` workflow |
|                       | preprocessed <#c      | only; number of       |
|                       | ontribution-ideas>`__ | proposed (really      |
|                       |                       | evaluated) points at  |
|                       |                       | each `MBO             |
|                       |                       | iteration <http       |
|                       |                       | s://www.rdocumentatio |
|                       |                       | n.org/packages/mlrMBO |
|                       |                       | /versions/1.1.2/topic |
|                       |                       | s/makeMBOControl>`__. |
|                       |                       | E.g.,                 |
|                       |                       | ``propose_points = 9``|
|                       |                       | . A reasonable value  |
|                       |                       | for this (and for     |
|                       |                       | ``design_size``,      |
|                       |                       | above) is 15-20       |
+-----------------------+-----------------------+-----------------------+
| ``max_iterations``    | `Not yet              | ``bayesian`` workflow |
|                       | preprocessed <#c      | only; maximum number  |
|                       | ontribution-ideas>`__ | of `sequential        |
|                       |                       | optimization          |
|                       |                       | steps <https://www.rd |
|                       |                       | ocumentation.org/pack |
|                       |                       | ages/mlrMBO/versions/ |
|                       |                       | 1.1.2/topics/setMBOCo |
|                       |                       | ntrolTermination>`__. |
|                       |                       | E.g.,                 |
|                       |                       | ``max_iterations = 3``|
+-----------------------+-----------------------+-----------------------+
| ``max_budget``        | `Not yet              | ``bayesian`` workflow |
|                       | preprocessed <#c      | only; maximum total   |
|                       | ontribution-ideas>`__ | number of `function   |
|                       |                       | evaluations           |
|                       |                       | <https://www.r        |
|                       |                       | documentation.org/pac |
|                       |                       | kages/mlrMBO/versions |
|                       |                       | /1.1.2/topics/setMBOC |
|                       |                       | ontrolTermination>`__ |
|                       |                       | for all iterations    |
|                       |                       | combined. E.g.,       |
|                       |                       | ``max_budget = 180``  |
+-----------------------+-----------------------+-----------------------+

``&default_model`` section
~~~~~~~~~~~~~~~~~~~~~~~~~~

This can contain either a single keyword/value line containing the
``candle_default_model_file`` keyword pointing to the full path of the
default model text file to use, e.g.,
``candle_default_model_file = $CANDLE/Benchmarks/Pilot1/NT3/nt3_default_model.txt``
or the *contents* of such a default model file as, e.g., in the
`grid <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/grid/grid_example.in>`__
or
`bayesian <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/bayesian/bayesian_example.in>`__
examples in the `quick-start section
above <#quick-start-examples-for-summit>`__.

``&param_space`` section
~~~~~~~~~~~~~~~~~~~~~~~~

This can contain either a single keyword/value line containing the
``candle_param_space_file`` keyword pointing to the full path of the
file specifying the hyperparameter space to use, e.g.,
``candle_param_space_file = $CANDLE/Supervisor/workflows/mlrMBO/data/nt3_nightly.R``
or the *contents* of such a parameter space file as, e.g., in the
`grid <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/grid/grid_example.in>`__
or
`upf <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/upf/upf_example.in>`__
examples in the `quick-start section
above <#quick-start-examples-for-summit>`__ or here:

.. code:: text

   &param_space
     makeDiscreteParam("batch_size", values = c(16, 32))
     makeIntegerParam("epochs", lower = 2, upper = 5)
     makeDiscreteParam("optimizer", values = c("adam", "sgd", "rmsprop", "adagrad", "adadelta"))
     makeNumericParam("dropout", lower = 0, upper = 0.9)
     makeNumericParam("learning_rate", lower = 0.00001, upper = 0.1)
   /

Note there are no commas at the end of each line in the example above.

Code organization
-----------------

A description of what every file does in the `wrappers
repository <https://github.com/fnlcr-bids-sdsi/candle_wrappers>`__, which
is cloned to ``$CANDLE/wrappers``, can be found
`here <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/repository_organization.md>`__. Some particular notes:

-  In addition to the page you are reading, all documentation is currently in the top-level directory:
   ``README.md`` (see this file for additional notes),
   ``repository_organization.md``, ``setup-biowulf.md``, and
   ``setup-summit.md``
-  Directories pertaining to the **setup** of the wrappers repository
   and in general of CANDLE on a new HPC system (involved in the `setup
   documentation <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/README.md>`__) are ``log_files``, ``swift-t_setup``,
   and ``test_files``
-  Directories pertaining to the **usage** of the wrapper scripts
   (involved in the usage documentation that you are currently reading)
   are:

   -  ``lmod_modules``: contains ``.lua`` files used by the ``lmod``
      system for loading ``module``\ s, enabling one to run, e.g.,
      `module load candle <#loading-the-candle-module>`__
   -  ``bin``: contains a single script called ``candle`` that can be
      accessed by typing ``candle`` on the command line once the CANDLE
      module has been loaded. You can generate a usage message by simply
      typing ``candle`` or ``candle help`` on the command line and
      hitting Enter
   -  ``examples``: contains sample/template input files and model
      scripts for different ``$SITE``\ s
   -  ``commands``: contains one directory so-named for each command to
      the ``candle`` program, each containing all files related to the
      command. The file called ``command_script.sh`` in each command’s
      directory is the main file called when the command is run using
      ``candle <COMMAND> ...``. The only command not currently tested on
      Summit is ``aggregate-results``. The bulk of the files involved in
      the functionality described in this document correspond to the
      ``submit-job`` command, i.e., are located in the ``submit-job``
      subdirectory

Recommendations for particular use cases
----------------------------------------

Run ``grid`` or ``bayesian`` hyperparameter searches on an already CANDLE-compliant model script such as a benchmark
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Note that you can copy a benchmark to your working directory and make
the modifications there, as the templates show.

1. Enter a directory on Summit’s Alpine filesystem such as
   ``$MEMBERWORK``
2. Load the ``candle`` module via
   ``source /gpfs/alpine/med106/world-shared/candle/env_for_lmod-tf2.sh``
3. Import one of the `templates for running canonically CANDLE-compliant
   models <#step-2-run-sample-candle-compliant-model-scripts>`__ using
   ``candle import-template {upf|mlrmbo}`` and delete all but the copied-over input
   file
4. Rename and tweak the input file to your liking using the
   `documentation for input files <#input-file-format>`__ above
5. Ensure your model runs on an interactive node (e.g.,
   ``bsub -W 1:00 -nnodes 1 -P med106 -q debug -Is /bin/bash``) by
   setting the ``run_workflow=0`` keyword setting in the ``&control``
   section of the input file and running
   ``candle submit-job <INPUT-FILE>``
6. Submit your job from a login node by setting the default setting of
   ``run_workflow=1`` in the ``&control`` section of the input file and
   running ``candle submit-job <INPUT-FILE>``

Create a new model script on which you want to run ``grid`` or ``bayesian`` hyperparameter searches
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Enter a directory on Summit’s Alpine filesystem such as
   ``$MEMBERWORK``
2. Load the ``candle`` module via
   ``source /gpfs/alpine/med106/world-shared/candle/env_for_lmod-tf2.sh``
3. Create a bare model script as usual (e.g., download a model from the
   Internet, tweak it, and apply it on your data)
4. Make the model script *minimally* CANDLE-compliant as described
   `above <#how-to-minimally-modify-a-bare-model-script-for-use-with-the-wrapper-scripts>`__
5. Import one of the `templates for running minimally CANDLE-compliant
   models <#step-3-run-sample-non-candle-compliant-model-scripts>`__
   using ``candle import-template {grid|bayesian}``; delete all but the
   input file
6. Rename and tweak the input file to your liking using the
   `documentation for input files <#input-file-format>`__ above
7. Ensure your model runs on an interactive node (e.g.,
   ``bsub -W 1:00 -nnodes 1 -P med106 -q debug -Is /bin/bash``) by
   setting the ``run_workflow=0`` keyword setting in the ``&control``
   section of the input file and running
   ``candle submit-job <INPUT-FILE>``
8. Submit your job from a login node by setting the default setting of
   ``run_workflow=1`` in the ``&control`` section of the input file and
   running ``candle submit-job <INPUT-FILE>``

Run a model script written in another language such as ``R`` or ``bash``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`Ask Andrew Weisman <#how-to-contact-andrew-for-help-with-anything-above>`__ to
test this first because he hasn’t tested it on Summit yet.

Pull updates to the central installation of CANDLE that have already been pulled into the main Supervisor/Benchmarks repositories
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Load the ``candle`` module via
   ``source /gpfs/alpine/med106/world-shared/candle/env_for_lmod-tf2.sh``
2. Enter the clone you’d like to update via ``cd $CANDLE/Supervisor`` or
   ``cd $CANDLE/Benchmarks``
3. Run ``git pull``, adjusting the permissions if necessary the very
   first time (or `ask
   Andrew <#how-to-contact-andrew-for-help-with-anything-above>`__ to do
   this)

Commit changes to the wrapper scripts or to the Supervisor or Benchmarks clones in the central installation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Load the ``candle`` module via
   ``source /gpfs/alpine/med106/world-shared/candle/env_for_lmod-tf2.sh``
2. Enter the clone you’d like to update via
   ``cd $CANDLE/{wrappers|Supervisor|Benchmarks}``
3. Make your modifications to the code and commit your changes,
   adjusting the permissions if necessary the very first time (or `ask
   Andrew <#how-to-contact-andrew-for-help-with-anything-above>`__ to do
   this)
4. `Ask Andrew <#how-to-contact-andrew-for-help-with-anything-above>`__
   to push the changes to newly forked versions of the corresponding
   repositories and submit pull requests into the main versions of the
   repositories

Contribution ideas
------------------

Feel free to make any changes you’d like to the code and commit them via
the `preliminary workflow
above <#commit-changes-to-the-wrapper-scripts-or-to-the-supervisor-or-benchmarks-clones-in-the-central-installation>`__.
Below are some ideas for particular ways to contribute:

-  Implement workflows other than ``grid`` and ``bayesian`` (UQ would be
   great!) by following the instructions
   `here <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/README.md#how-to-add-new-workflows>`__
-  If this is something you personally want, allow for command-line
   arguments to the ``candle`` command, such as ``run_workflow`` or any
   other `input file keywords <#input-file-format>`__
-  Check/preprocess the four mlrMBO keywords (``design_size``,
   ``propose_points``, ``max_iterations``, ``max_budget``) by following
   the instructions `here <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/README.md#how-to-add-a-new-keyword>`__ and
   seeing their usage
   `here <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/commands/submit-job/dummy_cfg-prm.sh>`__
   (good exercise to get familiar with the wrappers code)
-  Anything else!

Known issues
------------------------------------------------------------------------------------------------------------------------

-  **CUDA driver.** If, when running on an interactive node (using ``run_workflow=0`` in the input file), you get an error like ``tensorflow.python.framework.errors_impl.InternalError: cudaGetDevice() failed. Status: CUDA driver version is insufficient for CUDA runtime version`` then likely you need to load the CUDA module corresponding to that which is automatically loaded in batch mode, based on the contents of ``$CANDLE/Supervisor/workflows/common/sh/env-summit-tf2.sh``; currently, this means that you need to run ``module load cuda/10.2.89``. Explanation: When following the interactive protocol for testing, only the default version of Python is loaded prior to running the model using the default model settings, as opposed to the CUDA module being loaded as well. Note: This is a relatively new issue.
-  **InvalidArgumentError.** You may need to add ``K.clear_session()`` prior to, say, ``model = Sequential()`` in a Keras-based model. Otherwise, once the same rank runs a model script a *second* time, we get a strange ``InvalidArgumentError`` error that kills Supervisor (see the comments in `$CANDLE/Benchmarks/Pilot1/NT3/nt3_candle_wrappers_baseline_keras2.py <https://github.com/ECP-CANDLE/Benchmarks/blob/develop/Pilot1/NT3/nt3_candle_wrappers_baseline_keras2.py>`__ for more details). It is wholly possible that this is a bug that has gotten fixed in subsequent versions of Keras/Tensorflow.
-  **Path to CANDLE library.** If you, say, pull a Benchmark model script out of the ``Benchmarks`` repository into your own separate directory, you may need to add a line like ``sys.path.append(os.path.join(os.getenv('CANDLE'), 'Benchmarks', 'Pilot1', 'NT3'))``. This is demonstrated in `$CANDLE/wrappers/examples/summit-tf2/mlrmbo/nt3_baseline_keras2.py <https://github.com/fnlcr-bids-sdsi/candle_wrappers/blob/master/examples/summit-tf2/mlrmbo/nt3_baseline_keras2.py>`__.

How to contact Andrew for help with anything above
--------------------------------------------------

| Email: andrew.weisman@nih.gov
| Slack (ECP-CANDLE workspace): @Andrew Weisman
