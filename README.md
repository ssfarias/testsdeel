# Automated tests
Test scenarios created for Deel's selection process in the role of QA. [DEEL] https://dev.deel.wtf/

- Tests developed in Cypress + PageObject
- Reports in Mocha

## Folder Structure

```
project cypress
└───integration: Folder with tests (.spec.js files)
└───plugins: Folder with plugins configuration files
└───reports: Foled with the reports
     └───mocha: Post with the reports generated in json
     └───mochareports-hhml: Folder with html reports
└───screenshots: Folder to store evidence imagens
└───support: Folder for auxiliary class and pageobjects
    └───pageobjects: Folder with pageobjects (files js)
└───videos: Folders designed to store video evidence

```


## Pre-Requisites

1 - [Node.js e Npm](https://www.npmjs.com/get-npm) instalado;

## Setup 

1 - Clone the repository: https://github.com/ssfarias/testsdeel.git

2 - Access the `testsdeel` folder

## Run tests

- Run tests in native cypress graphic mode: `npx cypress run`

- Run tests in mode without graphic mode, generating html report Mocha: `npm run test`

- You can find the **Mocha** report in path:

```
└───Project
    └───reports
    └───mocha
    └───mochareports-html
 ```