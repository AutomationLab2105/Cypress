const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts:true,
    reportPageTitle: 'Automation Test Report',
    embeddedScreenshots: true,
    inlineAssets:true,
    saveAllAttempts:false,
    autoOpen:true,
    overwrite:false,
    code:false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    watchForFileChanges:false,
    retries:
    {
      runMode :3,
      openMode :2
    }
  },
});
