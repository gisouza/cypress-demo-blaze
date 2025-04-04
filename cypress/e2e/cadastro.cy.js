describe('Cadastro', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('#signin2').click();
    });
  
    it('Criar nova conta com nome dinâmico', () => {
      const username = `userGi${Date.now()}`;
      const password = 'senha123';
    
      cy.get('#sign-username').type(username);
      cy.get('#sign-password').type(password);
      cy.get('button[onclick="register()"]').click();
  
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Sign up successful.');
      });
  
      cy.writeFile('cypress/fixtures/user.json', { username, password });
    });

    describe('Login', () => {
        beforeEach(() => {
          cy.visit('/');
          cy.get('#login2').click();
        });
      
        it('Validar se o login foi realizado corretamente', () => {
          cy.readFile('cypress/fixtures/user.json').then((user) => {
            cy.get('#loginusername').type('userGi1743534590058');
            cy.get('#loginpassword').type(user.password);
            cy.get('button[onclick="logIn()"]').click({ force: true });
            cy.contains(`Welcome ${'userGi1743534590058'}`).should('be.visible');
          });
        });
      });
});