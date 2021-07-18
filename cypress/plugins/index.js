const wp = require('@cypress/webpack-preprocessor')
const fetch = require('node-fetch')

module.exports = (on, config) => {
  
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import * as allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};