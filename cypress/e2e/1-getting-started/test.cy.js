describe ("Pruebas de Cypress",()=>{
     beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
})
it("logeo usuario y contraseña",()=>{
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    
})
})
