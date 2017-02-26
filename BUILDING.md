# Building joda for development

Joda frontend packages use ember-cli for development and deployment.
For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Requirements
You will need the following things properly installed on your computer:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Ember CLI](https://ember-cli.com)

[Joda backend](https://github.com/joda-project/joda-backend)
is required for development.

## Installation
* `git clone https://github.com/joda-project/joda` this repository
* `cd joda`
* `yarn install`
* install required addons to work on
* copy `sample.env` to `.env` and adapt to your local environment

### Building
* `ember build` (development)
* `ember build --environment production` (production)

## Running and Testing
Run `ember serve` to setup a testing server which is by default available at http://localhost:4200.
Tests can be found at http://localhost:4200/tests.
