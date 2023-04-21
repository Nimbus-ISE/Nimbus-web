const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "imomvj",
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
