/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'sass',
      includePaths: [
        'node_modules/joda-core/node_modules'
      ]
    }
  });

  return app.toTree();
};
