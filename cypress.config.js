const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,   // Set width
    viewportHeight: 720,   // Set height
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
