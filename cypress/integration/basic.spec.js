sres; /// <reference types="Cypress" />

describe('my first e2e test', () => {
  it('should read title', () => {
    cy.viewport('samsung-s10');
    cy.visit('/');
    cy.contains('Markets');
  });
  it('should iteract with market list', () => {
    cy.viewport('samsung-s10');
    cy.visit('/');
    cy.get('app-markets').should('contain.text', 'Agde');
    cy.contains('Agde').click();
    cy.contains('34304');
    cy.contains('Arcachon').click();
    cy.contains('Cherbourg').click();
  });
});
