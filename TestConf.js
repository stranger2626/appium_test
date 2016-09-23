// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: ['Test.js'],

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    browserName: 'chrome',
    'appium-version': '1.0',
    platformName: 'Android',
    platformVersion: '6.0',
    deviceName: 'Android Emulator',
  },

  baseUrl: 'http://10.0.2.2:8000',

  // configuring wd in onPrepare
  // wdBridge helps to bridge wd driver with other selenium clients
  // See https://github.com/sebv/wd-bridge/blob/master/README.md
  onPrepare: function () {
    var wd = require('wd'),
      protractor = require('protractor'),
      wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
  }
};
