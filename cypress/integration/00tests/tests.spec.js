/// <reference types="cypress" />
require('cypress-xpath');

describe('test class', () => {
    it('test1', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.xpath('//input[@name="seg0_from"]').type('HYD');
        // cy.type('\uE015');
        // cy.type('\uE007');
    })
})