const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    retries: 2,
    projectId: "mid55i",
    setupNodeEvents(on, config) {
      
    },
  },
});
