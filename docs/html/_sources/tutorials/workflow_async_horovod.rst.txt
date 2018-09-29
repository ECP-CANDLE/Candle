== Async Local

A straightforward implementation of a skopt workflow that runs
everything in a Python subprocess.

Uses asynchronous background processes for tasks.

Works fine with aprun on Theta.

== Overview

. The search algorithm is set up using the normal skopt API. . The
workflow starts points_init tasks . As each task exits, it is replaced
by a new one from skopt . When points_max tasks have been issued, the
workflow issues no more tasks, but waits for the outstanding ones to
complete. . If any task fails (non-zero exit code), the workflow issues
no more tasks, but waits for the outstanding ones to complete. It also
may print a Python stack trace.

== Implementation notes

These details will change rapidly as the workflow becomes more generic.

. If OUTPUT is in the environment, this is used as an output directory,
else the workflow uses $PWD . . The workflow tasks are each assigned a
unique integer number. . The output for each task goes to a file with
the given number in the output directory.

== File index

main.sh:: Shell interface for the Python program.

main.py:: The main Python program. Sets up and runs the search loop.

Task.py:: The Python task (objective function). Currently hard-coded to
run task.sh. Needs to become a plug-in.

Problem.py:: The bounding box for the skopt search. Needs to become a
plug-in.

task.sh:: A dummy task. Can be replaced by any shell script, including
the ff Horovod script.

utils.py:: Misc. Python utilities.

=== System-specific scripts

submit-theta.sh:: Submits main.sh on Theta

== Concepts

NODES:: The number of nodes in the allocation

Task:: An execution of the objective function in the search

PARALLELISM:: The number of nodes in each task (per Horovod invocation)

CONCURRENCY:: The number of (parallel) tasks running at a point in time

== Quick start

. Edit the cfg file, uno-1.json . Set environment variable BENCHMARKS to
your Benchmarks clone . Optionally set environment variable DRYRUN=1

+-----------------------------------------+
| export BENCHMARKS=$HOME/proj/Benchmarks |
+-----------------------------------------+

== Sample output

+----+
| $  |
| ./ |
| ma |
| in |
| .s |
| h  |
| se |
| ar |
| ch |
| st |
| ar |
| t: |
| st |
| ar |
| te |
| d: |
| 16 |
| 58 |
| 6  |
| st |
| ar |
| te |
| d: |
| 16 |
| 58 |
| 7  |
| st |
| ar |
| te |
| d: |
| 16 |
| 59 |
| 2  |
| TA |
| SK |
| :  |
| 16 |
| 58 |
| 6  |
| dr |
| op |
| 0. |
| 36 |
| 90 |
| 93 |
| 56 |
| 29 |
| 67 |
| 98 |
| 24 |
| ba |
| tc |
| h_ |
| si |
| ze |
| 25 |
| 6  |
| de |
| la |
| y  |
| 2  |
+----+
| TA |
| SK |
| :  |
| 16 |
| 58 |
| 7  |
| st |
| ar |
| te |
| d: |
| 16 |
| 60 |
| 1  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 4  |
| dr |
| op |
| 0. |
| 83 |
| 95 |
| 81 |
| 19 |
| 89 |
| 63 |
| 05 |
| 04 |
| ba |
| tc |
| h_ |
| si |
| ze |
| 32 |
| de |
| la |
| y  |
| 1  |
+----+
| TA |
| SK |
| :  |
| 16 |
| 59 |
| 2  |
| dr |
| op |
| 0. |
| 60 |
| 31 |
| 33 |
| 15 |
| 34 |
| 42 |
| 04 |
| 12 |
| ba |
| tc |
| h_ |
| si |
| ze |
| 64 |
| de |
| la |
| y  |
| 1  |
+----+
| TA |
| SK |
| :  |
| 16 |
| 60 |
| 1  |
| dr |
| op |
| 0. |
| 31 |
| 58 |
| 38 |
| 20 |
| 14 |
| 09 |
| 22 |
| 96 |
| 4  |
| ba |
| tc |
| h_ |
| si |
| ze |
| 25 |
| 6  |
| de |
| la |
| y  |
| 0  |
+----+
| st |
| ar |
| te |
| d: |
| 16 |
| 63 |
| 0  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 4  |
| TA |
| SK |
| :  |
| 16 |
| 63 |
| 0  |
| dr |
| op |
| 0. |
| 75 |
| 36 |
| 49 |
| 51 |
| 99 |
| 97 |
| 95 |
| 58 |
| ba |
| tc |
| h_ |
| si |
| ze |
| 51 |
| 2  |
| de |
| la |
| y  |
| 1  |
+----+
| st |
| ar |
| te |
| d: |
| 16 |
| 64 |
| 1  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 4  |
| TA |
| SK |
| :  |
| 16 |
| 64 |
| 1  |
| dr |
| op |
| 0. |
| 40 |
| 03 |
| 49 |
| 26 |
| 10 |
| 71 |
| 03 |
| 66 |
| 3  |
| ba |
| tc |
| h_ |
| si |
| ze |
| 51 |
| 2  |
| de |
| la |
| y  |
| 1  |
+----+
| st |
| ar |
| te |
| d: |
| 16 |
| 65 |
| 2  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 4  |
| TA |
| SK |
| :  |
| 16 |
| 65 |
| 2  |
| dr |
| op |
| 0. |
| 73 |
| 11 |
| 56 |
| 38 |
| 95 |
| 21 |
| 62 |
| 7  |
| ba |
| tc |
| h_ |
| si |
| ze |
| 32 |
| de |
| la |
| y  |
| 0  |
+----+
| st |
| ar |
| te |
| d: |
| 16 |
| 66 |
| 3  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 4  |
| TA |
| SK |
| :  |
| 16 |
| 66 |
| 3  |
| dr |
| op |
| 0. |
| 71 |
| 95 |
| 98 |
| 09 |
| 74 |
| 46 |
| 45 |
| 58 |
| ba |
| tc |
| h_ |
| si |
| ze |
| 64 |
| de |
| la |
| y  |
| 1  |
+----+
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 3  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 2  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 1  |
| ta |
| sk |
| s_ |
| ru |
| nn |
| in |
| g: |
| 0  |
| Wo |
| rk |
| fl |
| ow |
| co |
| mp |
| le |
| te |
| !  |
+----+
