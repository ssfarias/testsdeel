const { describe } = require("mocha");
import '../support/commands';
import contract from '../support/pageobjects/pageObjectNoScope'
import '../support/index';

describe("New Contract", () => {
    beforeEach(() => cy.visit("https://dev.deel.wtf/login"));
   
    it("Create a new Fixed contract", () => {
      
        const login = "silvafar@gmail.com"        
        const password = "Simone@Helo01" 

        cy.xpath('//input[@name="email"]').type(login);
        cy.xpath('//input[@name="password"]').type(password);
        cy.xpath('//button[@type="submit"]').click();
        cy.xpath('//button[@data-qa="close"]').should('be.visible').click()
        cy.xpath('//h1[@data-qa="heading"]').should('be.visible');

        //Create a new Contract   
        cy.xpath('//p[contains(.,"Create a Contract")]').click();
        cy.xpath('//h4[contains(.,"Fixed Rate")]').click();
      
        //data        
            const name = "Contract Test001";   
            const scope = "Scope of work to Quality Assurance Engineer position"        
            const rate = "1000";
            const currency = "GBP - British Pound";
            const per = "Week";
            const country = "United State";
            const state = "Colorado";
            const clause = "This is an automated test written in Cypress by tester Simone";       
           
        //Fill out Fixed Contract Page
        cy.creatingFixedContract(name, title);

        //Fill out Define the rate Page
       cy.defineRate(rate,currency,per)

        //next
        cy.xpath('(//div[contains(.,"next")])[6]').click();
        cy.xpath('(//div[contains(.,"next")])[8]').click();

        //Add a Special Clause
        cy.specialClause(clause)

       //Fill out Contract Compliance Details
       cy.contractCompliance(country,state)      
      })  
});