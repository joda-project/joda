# joda
[![Homepage][web-img]][web]
[![License][license-img]][license]
[![Build Status][travis-img]][travis]

Joda is a simple reference management
web application.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org)
* [Bower](https://bower.io)
* [Ember CLI](https://ember-cli.com)

[Joda backend](https://github.com/joda-project/joda-backend)
is required for development.


## Installation

* `git clone https://github.com/joda-project/joda` this repository
* `cd joda`
* `npm install`
* `bower install`
* copy `sample.env` to `.env` and adapt to your local environment


## Running / Development

* `ember serve`
* visit Joda at [http://localhost:4200](http://localhost:4200).


### Building

* `ember build` (development)
* `ember build --environment production` (production)


### Deploying

Detailed instructions soon!


## Copyright info
Copyright (C) 2016-2017 Tadej Novak

This project may be used under the terms of the
GNU Affero General Public License version 3.0 as published by the
Free Software Foundation and appearing in the file [LICENSE.md](LICENSE.md).


[web]: https://joda.tano.si
[license]: https://github.com/joda-project/joda/blob/master/LICENSE.md
[travis]: https://travis-ci.org/joda/joda-core

[web-img]: https://img.shields.io/badge/web-joda.tano.si-green.svg
[license-img]: https://img.shields.io/github/license/joda-project/joda.svg
[travis-img]: https://travis-ci.org/joda-project/joda.svg?branch=master
