describe('Cenário 05: Checkout', () => {


  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    
    cy.url().should('include', 'checkout-step-one.html')
  })

  it('CT002 - First Name vazio', () => {
    cy.get('#last-name').should('be.visible').type('Gomes')
    cy.get('#postal-code').should('be.visible').type('60000-000')
    cy.get('#continue').click()
    
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  })

  it('CT002 - Last Name vazio', () => {
    cy.get('#first-name').should('be.visible').type('Glaucivania')
    cy.get('#postal-code').should('be.visible').type('60000-000')
    cy.get('#continue').click()
    
    cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required')
  })

  it('CT002 - Postal Code vazio', () => {
    cy.get('#first-name').should('be.visible').type('Glaucivania')
    cy.get('#last-name').should('be.visible').type('Gomes')
    cy.get('#continue').click()
    
    cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required')
  })
})