const { describe } = require("mocha");

describe("Do Login", () => {
    beforeEach(() => cy.visit("https://dev.deel.wtf/login"));
   
    it("Login", () => {
      
        const login = "silvafar@gmail.com"        
        const password = "Simone@Helo01"

        cy.xpath('//input[@name="email"]').type(login);
        cy.xpath('//input[@name="password"]').type(password);
        cy.xpath('//button[@type="submit"]').click();
        cy.xpath('//button[@data-qa="close"]').should('be.visible').click()
        cy.xpath('//h1[@data-qa="heading"]').should('be.visible');

    })  
});

