/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var sassInclude = 'node_modules';
  if (EmberApp.env() === 'development') {
    sassInclude = 'node_modules/joda-core/node_modules';
  }

  var app = new EmberApp(defaults, {
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg'],
      replaceExtensions: ['html', 'css', 'js', 'xml', 'json']
    },
    storeConfigInMeta: false,
    sassOptions: {
      extension: 'sass',
      onlyIncluded: true,
      includePaths: [
        sassInclude
      ]
    }
  });

  return app.toTree();
};
