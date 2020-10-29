Run Modes: Summit
=================

Login node: SITE=summit-login
-----------------------------

Warning: Run this under nice for quick tests (less than 1 minute).
Do not abuse the login nodes.

This mode uses a locally-compiled MPICH.

Make sure ``TURBINE_LAUNCH_OPTIONS`` is empty (check cfg-sys) (these options are passed directly to ``mpiexec``.

Examples with ``Supervisor/workflows/upf``:: bash

   $ timeout 60 nice test/upf-1.sh nt3 summit-login

Interactive node: SITE=summit-tf-*
----------------------------------

Set ``INTERACTIVE=1`` in your ``cfg-sys``

Get an interactive session.  You can use ``Supervisor/scratch/scripts/bsub-summit.sh`` , or any other method.

Examples with ``Supervisor/workflows/upf``.

You can use ``summit-tf1`` or ``summit-tf2``

In the interactive session, run:: bash

   $ test/upf-1.sh nt3 summit-tf1

If you forget to set ``INTERACTIVE=1``, this will try to submit another
bsub job from the interactive batch node.

Scheduled submission: SITE=summit-tf-\*
---------------------------------------

Set ``INTERACTIVE=0`` in your ``cfg-sys`` (or leave unset).

Examples with ``Supervisor/workflows/upf``.

You can use ``summit-tf1`` or ``summit-tf2``

From a normal login node session, run:: bash

   $ test/upf-1.sh nt3 summit-tf1
