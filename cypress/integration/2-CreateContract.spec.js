const { describe } = require("mocha");
import '../support/commands';
import '../support/pageobjects/pageObject';
import '../support/index';

describe("Create New Fixed Contract", () => {
       
    it("Doing Login", () => {
        cy.visit("https://dev.deel.wtf/login");

        const login = "silvafar@gmail.com"        
        const password = "Simone@Helo01" 
        
        cy.xpath('//input[@name="email"]').type(login);
        cy.xpath('//input[@name="password"]').type(password);
        cy.xpath('//button[@type="submit"]').click();
        cy.xpath('//button[@data-qa="close"]').should('be.visible').click()
        cy.xpath('//h1[@data-qa="heading"]').should('be.visible');
    })

    it("Creating a fixed contract", () => {     
        cy.xpath('//p[contains(.,"Create a Contract")]').click();
        cy.xpath('//h4[contains(.,"Fixed Rate")]').click();
    })

    it("Filling out fields to create a fixed contract", () => {
        const name = "Contract Test001";
        const title = "Quality Assurance Engineer";
        const dateStart = new Date();
        const dateSet = dateStart.getUTCDate();
        const yesterday = dateSet -1   
       
        cy.creatingFixedContract(name, title, yesterday);
    })

    it("Filling out fields Define the rate", () => {
        const rate = "1000";
        const currency = "GBP - British Pound";
        const per = "Week";

       cy.defineRate(rate,currency,per)
    })

    it("Next", () => {
        cy.xpath('(//div[contains(.,"next")])[6]').click();
        cy.xpath('(//div[contains(.,"next")])[8]').click();
    })

    it("Adding a special clause", () => {
        const clause = "This is an automated test written in Cypress by tester Simone";
        cy.specialClause(clause)
    })

    it("Selecting contract compliance details", () => {
       const country = "United State";
       const state = "Colorado";
       
       cy.contractCompliance(country,state)      
    })
});