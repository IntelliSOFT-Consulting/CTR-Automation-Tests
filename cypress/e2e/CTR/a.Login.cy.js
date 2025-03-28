/// <reference types= "cypress"/>

describe('Test Suite', function () {  
    beforeEach(function () {  
      cy.fixture('configs.json').then((configs) => {
        this.configs = configs  // Store fixture data in `this`
      })
      cy.baseurl()
    })
  
    it('Verify that the home page is accessible from the URL', () => {
      cy.contains('EXPERT COMMITTEE ON CLINICAL TRIALS (ECCT)').should('be.visible')
    })
  
    it('Verify that a user cannot login with incorrect username & correct password', function () {
      cy.get('.navbar-inner > .container').contains('Login').click()
      cy.get('#UserUsername').type('rian')
      cy.get('#UserPassword').type(this.configs.password) 
      cy.contains('Sign in').click()
      cy.contains('Your username or password was incorrect').should('be.visible')
    })
  
    it('Verify that a user cannot login with correct username & incorrect password', function () {
      cy.get('.navbar-inner > .container').contains('Login').click()
      cy.get('#UserUsername').type(this.configs.username) // Use `this.config`
      cy.get('#UserPassword').type('wrongpassword')
      cy.contains('Sign in').click()
      cy.contains('Your username or password was incorrect').should('be.visible')
    })
  
    it('Verify that a user cannot login without inputting username and password', () => {
      cy.get('.navbar-inner > .container').contains('Login').click()
      cy.contains('Sign in').click()
      cy.contains('Your username or password was incorrect').should('be.visible')
    })
  
    it('Verify that a user can login with correct username and correct password', function () {
      cy.get('.navbar-inner > .container').contains('Login').click()
      cy.get('#UserUsername').type(this.configs.username) // Use `this.config`
      cy.get('#UserPassword').type(this.configs.password)
      cy.contains('Sign in').click()
      cy.contains('Pre-Submission Meeting').should('be.visible')
    })
  })
  