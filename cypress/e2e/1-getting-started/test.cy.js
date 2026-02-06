describe ("Pruebas de Cypress",()=>{

    //Ingresar a URL
     beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
})
  it("1.-Logeo usuario y contraseña incorrecta, validación de elementos",()=>{
    //Comando reusable de login con usuario y password incorrectos
    cy.login('usererror','passerror')

    //Validar mensaje de error
cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
//visualización de boton X en: usuario, password y en mensaje de error, en ese orden
cy.get('#login_button_container > div > form > div:nth-child(1) > svg').should("exist")
cy.get('.svg-inline--fa').should("exist")
cy.get('[data-test="error-button"]').should("be.visible")


})

it("2.-Logeo usuario, contraseña correcta, validación pagina,orden de productos asc",()=>{
    //Comando reusable de login con usuario y password correctos
    cy.login()
    //Validación de ingreso a pagina correcta
  cy.get('.app_logo').should("be.visible")

  //Validar lista de textos, orden, cantidad y texto
const textosEsperados = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Fleece Jacket',
  'Sauce Labs Onesie',
  'Test.allTheThings() T-Shirt (Red)'
]
cy.get('.inventory_item_name').then(($items) => {
  const textosActuales = [...$items].map(el =>
    el.innerText.trim()
  )
  expect(textosActuales).to.deep.equal(textosEsperados)
})

})
it("3.-Logeo usuario, contraseña correcta, validación pagina,orden de productos desc",()=>{


//Comando reusable de login con usuario y password correctos
    cy.login()
    //Validación de ingreso a pagina correcta
  cy.get('.app_logo').should("be.visible")

  //Selecciónar del listado "Name (Z to A)"
  cy.get('[data-test="product-sort-container"]').select("Name (Z to A)")

  //Validar lista de textos, orden, cantidad y texto
const textosEsperados = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Fleece Jacket',
  'Sauce Labs Onesie',
  'Test.allTheThings() T-Shirt (Red)'
]

// Orden descendente
const textosOrdenadosDesc = [...textosEsperados].sort((a, b) => b.localeCompare(a))

cy.get('.inventory_item_name').then(($items) => {
  const textosActuales = [...$items].map(el =>
    el.innerText.trim()
  )
  expect(textosActuales).to.deep.equal(textosOrdenadosDesc)
})

})
})