describe('Carrinho de Compras', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Adicionar produtos ao carrinho', () => {
      cy.contains('Monitors').click();
      cy.contains('Apple monitor 24').click();
      cy.get('.btn-success').click();
      cy.get('.btn-success').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Product added');
      });
    });
    
  describe('Remover item do carrinho', () => {
      beforeEach(() => {
        cy.visit('/cart.html');
      });
    
      it('Deve remover um item do carrinho', () => {
        cy.wait(1000);
        // cy.get('.success a').contains('Delete').click();
        // cy.wait(1000);
        // cy.get('tbody tr').should('have.length', 0);
      });
    });
  });