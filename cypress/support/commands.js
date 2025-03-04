
Cypress.Commands.add("baseurl", () => {

    cy.visit('http://45.79.161.190:8080/', { waitUntil: 'domcontentloaded' })
})
Cypress.Commands.add("login", () => {
    cy.fixture('configs.json').then((config) => {
        cy.wrap(config).as('configData')  // Store in an alias
    })

  /*  cy.get('@configData').then((config) => {
        cy.get('#UserUsername').type(config.username)
        cy.get('#UserPassword').type(config.password)
        cy.contains('Sign in').click()
    })*/
})

