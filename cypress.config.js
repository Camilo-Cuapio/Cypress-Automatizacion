const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
screenshotOnRunFailure:true,
screenshotsFolder: 'cypress/screenshots',
video: true,
videosFolder:'cypress/videos',
videoCompression:true,
trashAssetsBeforeRuns:true,
  },
});
