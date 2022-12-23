const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
         on('task', {downloadFile})
    }
  },
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: false,
    html: false,
    json: true,
    timestamp:"mmddyyyy_HHMMss"
  }
})