Read about Candle
=================

Candle
------
CANDLE is software for deep learning at scale. In the early stages, the software is being developed for execution on the Department of Energy's leadership computing resources. However, in theory the software can execute on any reasonably configured cluster. This repository serves as a place for top level documents, tests, and other artifacts that span multiple repositories in the ECP-Candle organization.

BACKGROUND
----------
The code for our cancer work has three main components: deep learning cancer related benchmarks (Benchmarks repository), infrastructure for scaling deep learning onto DOE leadership systems (multiple repositories to which we will generally refer to as Candle), and codes that push the science forward (ModelZoo repository). For the ModelZoo repository, we have not yet started work.

From the perspective of source code management, we would like for these three main components to evolve independently. We imagine that the vast majority of the community would use the Benchmarks and ModelZoo but not Candle since few will have big machines.

CANDLE Releases
---------------
The Candle releases will include examples that demonstrate scalability and utility of things like hyper-parameter searches and data parallelism. The Candle releases can and will include things that are not in the benchmarks. They have different purposes.  Candle releases should include codes aimed at demonstrating utility. For example in the first release with the focus on hyper-parameter sweeps, the codes we include should show interesting behavior from such searchers.

In the first release, we focus on demonstrating early scaling of hyper-parameter searches. In the second release, we will improve on the hyper-parameter search but also introduce data parallelism. Examples that benefit from data parallelism may not necessarily be drawn from the benchmarks.

The third release that might focus on advancing model parallelism and will need to include more examples that benefit from this parallelism.  The fourth release starts to make sure they combine well.

Cancer Deep Learning Benchmarks
-------------------------------
Benchmarks may also be included as the examples in CANDLE releases, but not necessarily all benchmarks will be used as CANDLE examples. Benchmarks are simple for individuals to run stand-alone and are representative problems. The benchmarks are not necessarily codes that we would run big time cycles on for pushing research forward.

The Benchmarks releases will change over time. For example, in pilot one we are investigating changes the P1B1 and P1B2 codes. NT3 might end up replacing P1B2 and the variational autoencoder might end up replacing P1B1.

We will continue to add things to the benchmarks as each pilot project develops codes that are pushing the science. These codes will not necessarily be the codes in the benchmarks or used as examples for CANDLE releases, however could reside in the Zoo.

Model Zoo
---------
The Model Zoo is where codes that are designed to solve research problems in cancer reside, along with pre-trained models and references to training and validation data. Some of these pre-trained models may have been optimized from large-scale runs using Candle. These codes are not by design benchmarks, they go beyond the benchmarks, though a few of them might manifest as benchmarks.

