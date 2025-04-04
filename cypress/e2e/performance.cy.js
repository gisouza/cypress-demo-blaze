describe('Testes de Performance', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Deve carregar a home em menos de 3 segundos', () => {
      cy.visit('/', { timeout: 3000 });
    });
  });