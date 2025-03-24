
/// <reference types= "cypress"/>
import { testData } from '../../support/fakerData'
import { generateRandomDate } from '../../support/fakerData'
const randomDate = generateRandomDate();

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
         

     cy.get('#cke_contents_ApplicationStudyTitle > iframe', { timeout: 10000 })
         .should('be.visible')
         .then(($iframe) => {
        const body = $iframe[0].contentDocument.body
        cy.wrap(body)
        .then(cy.wrap)
        .click()
        .type('This is my test text', { delay: 100 })       
         })

         cy.get('#cke_contents_ApplicationLaymansSummary > iframe', { timeout: 10000 })
         .should('be.visible')
         .then(($iframe) => {
        const body = $iframe[0].contentDocument.body
        cy.wrap(body)
        .then(cy.wrap)
        .click()
        .type('This is my test text', { delay: 100 })       
         })
    
     cy.get('#cke_contents_ApplicationAbstractOfStudy > iframe', { timeout: 10000 })
     .should('be.visible')
        .then(($iframe) => {
        const body = $iframe[0].contentDocument.body
        cy.wrap(body)
        .then(cy.wrap)
        .click()
        .type('This is my test text', { delay: 100 })       
        })

         cy.get('#cke_contents_ApplicationLaymansSummary > iframe').type('lorem')
         cy.get('#cke_contents_ApplicationAbstractOfStudy > iframe').type('lorem')
         cy.get('#ApplicationVersionNo').type('1234')
         cy.get('#ApplicationReferenceNo').type('123412')
        
         cy.get('#ApplicationDateOfProtocol').type(randomDate);

         cy.get('#ApplicationStudyDrug').type('Panadol')
         
         cy.selectRandomDropdown('#StudyRoute0StudyRoute')
          

         cy.get('#ApplicationDiseaseCondition').type('test')
         cy.get('#ApplicationProductTypeBiologicals').click()

         cy.get('#Manufacturer0ManufacturerName').type('test')
         cy.get('#Manufacturer0Address').type('1234')
         cy.get('#Manufacturer0ManufacturerEmail').type(testData.email)

         cy.selectRandomDropdown('#Manufacturer0ManufacturingActivities')
         cy.selectRandomDropdown('#Manufacturer0ManufacturerCountry')
         cy.get('#ApplicationComparatorYes').click()
         cy.selectRandomDropdown('#EthicalCommittee0EthicalCommittee')
         cy.get('#EthicalCommittee0SubmissionDate').type(randomDate)
         const committeeNumber = Math.floor(Math.random() * 9000) + 1000;

         cy.get('#EthicalCommittee0ErcNumber').type(committeeNumber)
         cy.get('#SadrSaveChanges').click()
       
       })
      })
 })