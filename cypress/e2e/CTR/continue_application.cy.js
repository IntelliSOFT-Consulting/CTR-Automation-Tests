
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
         cy.get('#ApplicationDateOfProtocol')
         .click()
         .type('05-01-2025')
         cy.get('#ApplicationStudyDrug').type('Panadol')
         
         cy.get('#StudyRoute0StudyRoute').then(($select) => {
          const options = $select.find('option:not([value=""])')
          const randomIndex = Math.floor(Math.random() * options.length)
          const randomValue = options.eq(randomIndex).val()
          cy.wrap($select).select(randomValue)
        })

         cy.get('#ApplicationDiseaseCondition').type('test')
         cy.get('#ApplicationProductTypeBiologicals').click()

         cy.get('#Manufacturer0ManufacturerName').type('test')
         cy.get('#Manufacturer0Address').type('1234')
         cy.get('#Manufacturer0ManufacturerEmail').type(testData.email)

         cy.selectRandomDropdown('#Manufacturer0ManufacturingActivities')
         cy.selectRandomDropdown('#Manufacturer0ManufacturerCountry')
         cy.get('#ApplicationComparatorYes').click()
         cy.selectRandomDropdown('#EthicalCommittee0EthicalCommittee')
        /* cy.get('#EthicalCommittee0EthicalCommittee').type('test')
         cy.get('#EthicalCommittee0SubmissionDate').type('01-01-2025')
         cy.get('#EthicalCommittee0ErcNumber').type('test')
         cy.get('#EthicalCommittee0InitialApproval').type('01-01-2025')
         
          /* .closest('tr')
           //.find('Edit')
           .get(':nth-child(*) > :nth-child(*) > a > .label')
           //.should('have.length', 1) // Ensure only one Edit button is found
           .click();*/
       })
       
       
       
   //  cy.get('.ui-tabs-nav').contains('Abstract').click()

   })
 })