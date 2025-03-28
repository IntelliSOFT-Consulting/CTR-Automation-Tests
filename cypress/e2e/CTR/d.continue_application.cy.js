
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
/*it('Create Abstract', function () {
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


      it('Sites', function() {
        cy.get('.navbar-inner > .container').contains('Login').click()
        cy.get('#UserUsername').type(this.configs.username) // Use `this.config`
        cy.get('#UserPassword').type(this.configs.password)
        cy.contains('Sign in').click()
        cy.get('.menu > .nav').contains('My Applications').click()
        cy.fixture('applicationData.json').then((data) => {
            cy.contains('td', data.title).should('be.visible')
            cy.get('#ApplicationFilter').type(data.title)
            cy.get('.btn-inverse').click()
            cy.get('a > .label')
            .first()
            .click()
        cy.get('#maincontent').contains('Sites').click()
        cy.get('#ApplicationSingleSiteMemberStateYes').click()
        cy.get('#ApplicationLocationOfArea').type(testData.site)
        cy.get('#ApplicationMultipleCountriesNo').click()
        cy.get('#cke_contents_ApplicationStaffNumbers > iframe', { timeout: 10000 })
        .should('be.visible')
           .then(($iframe) => {
           const body = $iframe[0].contentDocument.body
           cy.wrap(body)
           .then(cy.wrap)
           .click()
           .type('This is my test text', { delay: 100 })       
           })
           cy.get('#SadrSaveChanges').click()



          
        })
      })*/

        it('Checklist', function() {
          // Test configuration
          const testFiles = [
              'cypress/fixtures/files/1743151953_PPB.pdf',
              'cypress/fixtures/files/1743151936_PPB.pdf',
              'cypress/fixtures/files/1743151981_PPB.pdf',
              'cypress/fixtures/files/1743151986_PPB.pdf',
              'cypress/fixtures/files/1743151993_PPB.pdf'
             
          ]
      
          const randomDate = () => {
              const start = new Date(2020, 0, 1)
              const end = new Date()
              const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
              return date.toLocaleDateString('en-GB')
          }
      
          cy.get('.navbar-inner > .container').contains('Login').click()
          cy.get('#UserUsername').type(this.configs.username)
          cy.get('#UserPassword').type(this.configs.password)
          cy.contains('Sign in').click()
          cy.get('.menu > .nav').contains('My Applications').click();
      
          cy.fixture('applicationData.json').then((data) => {
              // Application selection
              cy.contains('td', data.title).should('be.visible')
              cy.get('#ApplicationFilter').type(data.title)
              cy.get('.btn-inverse').click();
              cy.get('a > .label').first().click()
              cy.get('#maincontent').contains('Checklist').click()
      
              cy.get('#tabs-12 .add-checklist').each(($button, index) => {
                  const randomFile = testFiles[Math.floor(Math.random() * testFiles.length)];
                  const fileName = randomFile.split('/').pop()
      
                  cy.wrap($button).click();
                  cy.wrap($button).parents('.control-group').within(() => {
                      cy.get('input[type="file"]', { timeout: 10000 })
                          .selectFile(randomFile, { force: true })
      
                      cy.get('input.datepickers[type="text"]', { timeout: 15000 })
                          .should('be.visible')
                          .clear()
                          .type(randomDate())
      
                      cy.contains('button', 'Upload', { timeout: 10000 })
                          .should('be.visible')
                          .click()
      
                      cy.get('a.btn.btn-info[href*="/applicant/attachments/download/"]', { timeout: 30000 })
                          .should('be.visible')
                         // .and('contain', fileName.split('.')[0]) // Match filename without extension
                          .and('have.attr', 'href')
                          .should('include', '/download/')
                  })
      
                  if (index > 0) cy.wait(500)
              })
      
              cy.get('#SadrSaveChanges').click();
              cy.get('.alert.alert-success', { timeout: 20000 })
                  .should('contain', 'The change to the application has been saved')
          });
      });
    })