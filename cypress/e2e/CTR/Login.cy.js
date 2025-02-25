/// <reference types= "cypress"/>
beforeEach(()=>{
cy.baseurl()

})
describe('Test Suite', () => {

it('Verify that the home page is accessible from the url', () => {
    cy.contains('EXPERT COMMITTEE ON CLINICAL TRIALS (ECCT)').should('be.visible')

})

it('verify that a user cannot login with incorrect username & correct password', () => {
    cy.get('.navbar-inner > .container').contains('Login').click()
    cy.get('#UserUsername').type('rian')
    cy.get('#UserPassword').type(config.password)
    cy.contains('Sign in').click()
    cy.contains('Your username or password was incorrect').should('be.visible')


})

it('verify that a user cannot login with correct username & incorrect password', () => {
    cy.get('.navbar-inner > .container').contains('Login').click()
    cy.get('#UserUsername').type(config.username)
    cy.get('#UserPassword').type('tisrhi')
    cy.contains('Sign in').click()
    cy.contains('Your username or password was incorrect').should('be.visible')

})

it('verify that a user cannot login without inputing username and password', () => {
    cy.get('.navbar-inner > .container').contains('Login').click()
    cy.contains('Sign in').click()
    cy.contains('Your username or password was incorrect').should('be.visible')

})

it('verify that a user can login with correct username and correct password', () => {
    cy.get('.navbar-inner > .container').contains('Login').click()
    cy.get('#UserUsername').type(config.username)
    cy.get('#UserPassword').type(config.password)
    cy.contains('Sign in').click()
    cy.contains('Pre-Submission Meeting').should('be.visible')

})
})
