
Cypress.Commands.add("baseurl", () => {

    cy.visit('http://45.79.161.190:8080/', { waitUntil: 'domcontentloaded' })
})
Cypress.Commands.add("login", () => {
    cy.fixture('configs.json').then((config) => {
        cy.wrap(config).as('configData')  // Store in an alias
    })

    Cypress.Commands.add('selectRandomDropdown', (selector) => {
        cy.get(selector).then(($select) => {
          const options = $select.find('option:not([value=""])')
          const randomIndex = Math.floor(Math.random() * options.length)
          const randomValue = options.eq(randomIndex).val()
          cy.wrap($select).select(randomValue)
        })
      })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

