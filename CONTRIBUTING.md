# How to contribute to Joda

## Feature Requests
It is a high possibility that all features were not included into the project. Feel free to
open an issue describing your needed functionality.

If you can, you are encouraged to write the new features by yourself and submit
a pull request (more details below).

Please do not send send feature requests and bug reports via e-mail!

## Submitting Issues
Found a bug in Joda? Here are some guidelines on how to report the issue so it can be resolved
as fast as possible:

- Explain in detail how to reproduce the issue.
- Please include information on specific versions of software you are using:
  - general: Joda and its plugins versions
  - for frontend: which browser and operating system versions you use
  - for backend and deployment: Python and Node versions, operating system and version

Sometimes additional information might be needed for the issue to be resolved succesfully.
The issue will be closed when not replied for a month or longer. Feel free to reopen it later
if still encountering the problem.

## Pull Requests
To ease the pull request merge into mainline, please follow these requirements:
- The pull request title and message should be meaningful enough that reading
  the code is not necessary.
- Use similar coding style as you see in existing code, notably:
  - use 2 spaces indentation not tabs
  - ECMAScript 2015 is required
- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests. You should create a separate branch for each one.
- Make sure each individual commit in your pull request is meaningful.
  If you had to make multiple intermediate commits while developing, please
  squash them before sending them to us.
- Use git's [interactive rebase](https://help.github.com/articles/interactive-rebase)
  feature to tidy up your commits before submitting the pull request.
- Tests needs to be written for new features. Code coverage should never decrease.
- Your PRs must pass build tests on Travis.
