describe('Cenário 05: Checkout', () => {
 
   it('CT06 - Envio do formulário com caracteres especiais e números nos campos de texto', () => {
    cy.visit('https://www.saucedemo.com/')
   
    cy.get ('#user-name').type('standard_user')
    cy.get('#password').type ('secret_sauce')
    cy.get('#login-button').click()

    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.get('.shopping_cart_link').click()

    cy.get('#checkout').click()
    
    cy.get ('#first-name').type('Di0g0@')
    cy.get('#last-name').type ('Ferr3ir$')
    cy.get('#postal-code').type ('600000-000')
    cy.get('#continue').click()

    cy.get('#finish').click()

    cy.contains ('Thank you for your order')
})
})