Cypress.Commands.add('creatingFixedContract', (name, title) => {
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
});

Cypress.Commands.add('defineRate', (rate, currency,per) => {
    cy.xpath('//input[@name="rate"]').type(rate);
    cy.xpath('//div[@class="select__single-value css-1uccc91-singleValue"][contains(.,"USD - US Dollar")]').type(currency);
    cy.xpath('//div[@id="react-select-3-option-37"]').click()    
    cy.xpath('//div[@class="select__value-container select__value-container--has-value css-1hwfws3"][contains(.,"Month")]').type(per);
    cy.xpath('//div[@id="react-select-4-option-0"]').click();
});

Cypress.Commands.add('specialClause', (clause) => {
    cy.xpath('(//div[contains(.,"add a special clause")])[10]').click();
    cy.xpath('//textarea[@maxlength="10000"]').type(clause);
    cy.xpath('(//div[contains(.,"next")])[7]').click();
});

Cypress.Commands.add('contractCompliance', (country,state) => {
    //select tact residency country
    cy.xpath('//div[@class="select__placeholder css-1wa3eu0-placeholder"]').type(country);
    cy.xpath('//div[@class="select__option select__option--is-focused css-1n7v3ny-option"][contains(.,"United States")]').click();
    //select tax residence state
    cy.xpath('//div[@class="select__value-container css-1hwfws3"]').type(state);
    cy.xpath('//div[@class="select__option select__option--is-focused css-1n7v3ny-option"][contains(.,"Colorado")]').click();
    cy.xpath('(//div[contains(.,"create contract")])[7]').click();
    cy.xpath('//div[@class="font-12 mb-4"]', {timeout: 50000})
    .should('be.visible');
});



