exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'praveendavid_ITdqfY',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'pJnAj7DihD1R2xDZngSM',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        app: 'bs://sample.app',
        browserstackLocal: true
      },
    ]
  ],
  capabilities: [{
    'bstack:options': {
      deviceName: 'iPhone 14 Pro Max',
      platformVersion: '16',
      platformName: 'ios',
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true
    }
  }],
  maxInstances: 10,
  updateJob: false,
  specs: [
    './examples/run-local-test/specs/local_test.js'
  ],
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  }
};
