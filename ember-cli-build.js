/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg'],
      replaceExtensions: ['html', 'css', 'js', 'xml', 'json']
    },
    storeConfigInMeta: false,
    'ember-cli-babel': {
      includePolyfill: true
    },
    sassOptions: {
      extension: 'sass',
      onlyIncluded: true,
      includePaths: [
        'node_modules'
      ]
    }
  });

  return app.toTree();
};
