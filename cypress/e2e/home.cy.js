describe('Página inicial | Smoke Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Validar exibição correta do título', () => {
    cy.contains('PRODUCT STORE').should('be.visible');
  });

  it('Validar navegação entre categorias', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i5').should('be.visible');
    cy.contains('Phones').click();
    cy.contains('Nokia lumia 1520').should('be.visible');
    cy.contains('Monitors').click();
    cy.contains('Apple monitor 24').should('be.visible');
  });
});