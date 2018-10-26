var HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  // ----- How to setup Selenium -----
  //
  // There are three ways to specify how to use Selenium. Specify one of the
  // following:
  //
  // 1. seleniumServerJar - to start Selenium Standalone locally.
  // 2. seleniumAddress - to connect to a Selenium server which is already
  //    running.
  // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

  // The location of the selenium standalone server .jar file.
  // seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar',
  // The port to start the selenium server on, or null if the server should
  // find its own unused port.
  seleniumPort: null,
  // Chromedriver location is used to help the selenium standalone server
  // find chromedriver. This will be passed to the selenium jar as
  // the system property webdriver.chrome.driver. If null, selenium will
  // attempt to find chromedriver using PATH.
  // chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.41',
  // Additional command line options to pass to selenium. For example,
  // if you need to change the browser timeout, use
  // seleniumArgs: ['-browserTimeout=60'],
  seleniumArgs: [],

  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  sauceUser: null,
  sauceKey: null,

  // Specify you want to use jasmine 2.x as you would with mocha. Note, 'jasmine' by default will use the latest jasmine framework.
  framework: 'jasmine2',

  "directConnect": true,
  
  // ----- What tests to run -----
  //
  // Spec patterns are relative to the location of this config.
  specs: [
    // './e2e/specs/*.js'
    './e2e/specs/pivot.spec.js',
    './e2e/specs/test-sample.js'
  ],

  // ----- Capabilities to be passed to the webdriver instance ----
  //
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
  capabilities: {
    'browserName': 'chrome'
  },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9999',

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of

  rootElement: 'body',

  // ----- Options to be passed to minijasminenode -----
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 10000,
  },
  
  
  onPrepare: function() {
	  
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'target/',
		 docTitle: 'HELLO WORLD',
		 takeScreenShotsOnlyForFailedSpecs: false,
		 preserveDirectory: false,
      }).getJasmine2Reporter());
	  
	  jasmine.getEnv().addReporter(new SpecReporter({
		  spec: {
			displayStacktrace: true
		  }
		}));
   },
  
};