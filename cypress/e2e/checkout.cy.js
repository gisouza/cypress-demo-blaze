describe('Checkout', () => {
    beforeEach(() => {
      cy.visit('/cart.html');
    });
  
    it('Deve finalizar uma compra', () => {
      cy.contains('Place Order').click();
      cy.get('#name').type('Teste Gi');
      cy.get('#country').type('Brasil');
      cy.get('#city').type('Blumenau');
      cy.get('#card').type('1234123412341234');
      cy.get('#month').type('12');
      cy.get('#year').type('2030');
      cy.contains('Purchase').click();
      cy.contains('Thank you for your purchase!').should('be.visible');
    });
  });