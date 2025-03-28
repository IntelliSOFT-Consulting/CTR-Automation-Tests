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
  
  it('Start a new application', function () {
      cy.get('.navbar-inner > .container').contains('Login').click()
      cy.get('#UserUsername').type(this.configs.username) // Use `this.config`
      cy.get('#UserPassword').type(this.configs.password)
      cy.contains('Sign in').click()
      cy.contains('Pre-Submission Meeting').should('be.visible')
      cy.get('.caption > .btn-success').contains('Create').click()

      cy.get('#ApplicationTotalSites').type('1')
      cy.get('#ApplicationShortTitle').type(testData.title)
      cy.get('#InvestigatorContact0GivenName').type(testData.name)
      cy.get('#InvestigatorContact0FamilyName').type(testData.name)
      cy.get('#InvestigatorContact0Qualification').type(testData.qualification)
      cy.get('#InvestigatorContact0ProfessionalAddress').type(testData.address)
      cy.get('#InvestigatorContact0Telephone').type(testData.phone)
      cy.get('#InvestigatorContact0Email').type(testData.email)
      cy.get('.submit').contains('Create').click()
      cy.get('#maincontent', {timeout: 20000}).contains('The application has been created, An Invoice has been sent to your email with the invoice details', {timeout: 20000})
      .should('be.visible')

      const applicationData = {
        title: testData.title
      }
      
      cy.writeFile('cypress/fixtures/applicationData.json', applicationData)
      


    })
  })



  




   /* const mailslurp = new MailSlurp({ apiKey: Cypress.env('MAILSLURP_API_KEY') });
    
    it('Verifies email after invoice is sent', async () => {
      const inbox = await mailslurp.createInbox();
      cy.log(`Test email address: ${inbox.emailAddress}`);
    
      cy.get('#submit-button').click();
    
      const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);
      expect(email.subject).to.contain('Invoice Details');
      expect(email.body).to.contain('Your invoice has been sent.');
    });*/
    
    

  
  