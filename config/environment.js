'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'joda',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {},

    Joda: {},

    i18n: {
      defaultLocale: 'en'
    },

    moment: {
      outputFormat: 'LLL'
    }
  };

  // Joda specific
  if (process.env.JODA_APP_NAME) {
    ENV.Joda.appName = process.env.JODA_APP_NAME;
  }

  if (process.env.JODA_BACKEND_URI) {
    ENV.Joda.backendUri = process.env.JODA_BACKEND_URI;
  }

  if (process.env.JODA_AUTH_KEY) {
    ENV.Joda.authKey = process.env.JODA_AUTH_KEY;
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
