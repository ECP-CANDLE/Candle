How to Contribute this Documents
=================================
Current documentation site is built with a python documentation generator, Sphinx_, and hosted in Github.
In order to make modifications, the changes need to be built with Sphinx, and the generated html files must be
committed to the Github repository.


How to add a new document
--------------------------
The Sphinx reads rst (ReStructuredText) files. For a quick reference, please checkout `here <http://docutils.sourceforge.net/docs/user/rst/quickref.html>`_.

Clone our repo ``https://github.com/ECP-CANDLE/Benchmarks.git`` and create a new file inside ``docs_/source/`` directory.
You can start a directory structure under the source directory, if you want to organize files. Just make sure your changes are reflected in the index file.

Don't forget to **link** the new document in the index file. If you want to link from the top level, please add in ``docs_/source/index.rst``.


How to build html
------------------
If you like to reflect all the changes in the github.io site, please follow instructions below. You may need to
install Sphinx_ and dependencies. Please refer How to install Sphinx section below.

After you have Sphinx requirements, go to ``docs_`` direcotory and run ``make html`` command.
This will start generate multiple html files in ``docs`` directory. You need to include them as well as the source file
in your git commit. After pushing those changes, please allow a couple of minutes to see in the website.

..

  $ cd docs\_

  // triggers sphinx to generate html in ../docs/ folder

  $ make html

  // add changed source doc files

  $ git add [source files]

  // add all built html

  $ git add ../docs/

  $ git commit -m '[commit message]'

  // The documentation site will be refreshed after a couple of minutes

  $ git push

..


How to install Sphinx
----------------------
Both Sphinx and the theme package are available in pip.
You will also need ``keras`` package because we reads ``CANDLE Library`` python package and build API documents.

..

  $ pip install Sphinx sphinx-rtd-theme

  # also need keras to build module docs

..


How to convert asciidoc format to rst
--------------------------------------
Sphinx by default does not support Asciidoc and do not have plan to support in near future (check this issue_ for detail).
However, Pandoc_, a univeral document convert, can be used to convert rst format. For example,

..

  # install pandoc first. Refer the pandoc website for installation.

  # target format rst (-t), output file (-o)

  $ pandoc -t rst -o new_rst_file.rst input_asciidoc_file.adoc

  # convert markdown to rst

  $ pandoc -t rst -o new_rst_file.rst input_markdown_file.md

..


.. _issue: https://github.com/rtfd/readthedocs.org/issues/17
.. _Pandoc: https://pandoc.org/
.. _Sphinx: http://www.sphinx-doc.org/en/master/