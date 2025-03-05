
/// <reference types= "cypress"/>
/// <reference types= "cypress"/>
import { testData } from '../../support/fakerData'
//import { MailSlurp } from 'mailslurp-client'

describe('Test Suite', function () {  
    
    beforeEach(function () {  
      cy.fixture('configs.json').then((configs) => {
        this.configs = configs  // Store fixture data in `this`
      })
      cy.baseurl()
      cy.login()
    })
it('Create Abstract', function () {
    // cy.readFile('cypress/fixtures/applicationData.json').then((applicationData) => {

     cy.get('.navbar-inner > .container').contains('Login').click()
     cy.get('#UserUsername').type(this.configs.username) // Use `this.config`
     cy.get('#UserPassword').type(this.configs.password)
     cy.contains('Sign in').click()
     cy.get('#maincontent').contains('Applications').click()
     cy.fixture('applicationData.json').then((data) => {
         cy.contains('td', data.title).should('be.visible')
         cy.get('#ApplicationFilter').type(data.title)
         cy.get('.btn-inverse').click()
         cy.get('a > .label')
         .first()
         .click()
         cy.get('#cke_contents_ApplicationStudyTitle > iframe').type('lorem')
         cy.get('#cke_contents_ApplicationLaymansSummary > iframe').type('lorem')
         cy.get('#cke_contents_ApplicationAbstractOfStudy > iframe').type('lorem')
         cy.get('#ApplicationVersionNo').type('1234')
         cy.get('#ApplicationReferenceNo').type('123412')
         cy.get('#ApplicationStudyDrug').type('Panadol')
         
          /* .closest('tr')
           //.find('Edit')
           .get(':nth-child(*) > :nth-child(*) > a > .label')
           //.should('have.length', 1) // Ensure only one Edit button is found
           .click();*/
       });
       
       
       
     cy.get('.ui-tabs-nav').contains('Abstract').click()

   })
 })