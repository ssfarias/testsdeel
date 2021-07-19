# Automated tests
Test scenarios created for Deel's selection process in the role of QA. [DEEL] https://dev.deel.wtf/

    -Tests developed in Cypress using PageObject
    -Reports in Mocha

## Folder Structure

```
project cypress
Fixtures: Folder with the BDD (.robot files)
└───integration: Folder with tests (.spec.js files)
└───plugins: Folder with plugins configuration files
└───reports: Code with mapped pages (.py files)
     └───mocha: Post with the reports generated in json
     └───mochareports-hhml: Folder with html reports, generated from jason
└───screenshots: Folder intended to store evidence of images
└───support: Folder for generating reports / screenshots
└───videos: Folders designed to store video evidence

```


## Pre-Requisites

1 - [Node.js e Npm](https://www.npmjs.com/get-npm) instalado;

## Setup 

1 - Clone the repository: https://github.com/ssfarias/testsdeel.git

2 - Access the testsdeel folder

## Run tests

Run tests in native cypress graphics mode: npx cypress run

Run tests in mode without graphical mode, generating html report Mocha: mpm run test
You can find the mocha report in path:

```
└───Project
    └───reports
    └───mocha
    └───mochareports-html
 ```