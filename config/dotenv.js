module.exports = function() {
  return {
    clientAllowedKeys: [
      'BACKEND_URI',
      'AUTH_KEY'
    ],
    failOnMissingKey: true
  };
};
