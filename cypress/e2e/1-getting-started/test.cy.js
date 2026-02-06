describe ("Pruebas de Cypress",()=>{
     beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
})
it("logeo usuario y contraseña",()=>{
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
  cy.get('.app_logo').should("be.visible")
})

it("Logeo con usuario y contraseña incorrecta",()=>{
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("Error")
    cy.get('[data-test="login-button"]').click()
cy.get('[data-test="error"]').should("be.visible")
cy.get('[data-test="error"]').should("be.visible")
cy.get('[data-test="error"]').should("be.visible")
cy.get('[data-test="error-button"]').should("be.visible")
})
})
