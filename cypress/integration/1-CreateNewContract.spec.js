const { describe } = require("mocha");

describe("New Contract", () => {
    beforeEach(() => cy.visit("https://dev.deel.wtf/login"));
   
    it("Create new Contract", () => {
      
        const login = "silvafar@gmail.com"        
        const password = "Simone@Helo01" 

        cy.xpath('//input[@name="email"]').type(login);
        cy.xpath('//input[@name="password"]').type(password);
        cy.xpath('//button[@type="submit"]').click();
        cy.xpath('//button[@data-qa="close"]').click()
        cy.xpath('//h1[@data-qa="heading"]').should('be.visible');

        //Create new contract
        cy.xpath('//p[contains(.,"Create a Contract")]').click();
        cy.xpath('//h4[contains(.,"Fixed Rate")]').click();
      
        //data
       const name = "Contract test001"
       const title = "Quality Assurance Engineer"
       const rate = "1000"
       const currancy = "GBP - British Pound"
       const per = "Week"
       const country = "United State"
       const state = "Colorado"
       const clause = "This is an automated test written in Cypress by tester Simone"
           
        //Contract name
        cy.xpath('//input[@name="name"]').type(name);
        cy.xpath('//input[@name="jobTitle"]').type(title);
        cy.xpath('//p[@class="suggestions-option"]').click();
        cy.xpath('//div[@class="select__value-container css-1hwfws3"][contains(.,"Select...")]').click();
        cy.xpath('//div[@id="react-select-2-option-0"]').click();
        cy.xpath('//h6[contains(.,"Saved/predefined scopes")]').click();
        cy.xpath('//div[@class="scope-box"][contains(.,"Quality Assurance Engineer")]').click();      
        cy.xpath('//div[@name="effectiveDate"]').click();
        cy.xpath('//abbr[contains(.,"16")]').click();
        cy.xpath('//button[@class="button mb-7 w-100"][contains(.,"next")]').click();
      
        //Another page
        cy.xpath('//input[@name="rate"]').type(rate);
        cy.xpath('//div[@class="select__single-value css-1uccc91-singleValue"][contains(.,"USD - US Dollar")]').type(currancy);
        cy.xpath('//div[@id="react-select-3-option-37"]').click()     
        
        cy.xpath('//div[@class="select__value-container select__value-container--has-value css-1hwfws3"][contains(.,"Month")]').type(per);
        cy.xpath('//div[@id="react-select-4-option-0"]').click();

        //next
        cy.xpath('(//div[contains(.,"next")])[6]').click();
        cy.xpath('(//div[contains(.,"next")])[8]').click();

        //Add in a Special Clause
        cy.xpath('(//div[contains(.,"add a special clause")])[10]').click();
        cy.xpath('//textarea[@maxlength="10000"]').type(clause);
        cy.xpath('(//div[contains(.,"next")])[7]').click();

       //select tax residence country
        cy.xpath('//div[@class="select__placeholder css-1wa3eu0-placeholder"]').type(country);
        cy.xpath('//div[@class="select__option select__option--is-focused css-1n7v3ny-option"][contains(.,"United States")]').click();

        //select tax residence state
        cy.xpath('//div[@class="select__value-container css-1hwfws3"]').type(state);
        cy.xpath('//div[@class="select__option select__option--is-focused css-1n7v3ny-option"][contains(.,"Colorado")]').click();

        cy.xpath('(//div[contains(.,"create contract")])[7]').click();

        cy.xpath('//div[@class="font-12 mb-4"]', {timeout: 10000})
        .should('be.visible');
       
      
    })  
});