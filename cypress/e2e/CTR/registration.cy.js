/// <reference types= "cypress"/>
import { faker } from '@faker-js/faker'
beforeEach(()=>{
    cy.baseurl()
    
    })
    describe('Test Suite', () => {
    
    it('Verify that a user can perform successful self registration', () => {

        const username = faker.internet.userName()
        const phone = '07' + Math.floor(Math.random() * 1000000000)
        const password = faker.internet.password()
        const institutionName = faker.company.name()
        const address = faker.location.streetAddress()
        const email = faker.internet.email()


        cy.get('.navbar-inner > .container').contains('Register').click()
        cy.get('#UserUsername').type(username,  {force: true})
        cy.get('#UserPhoneNo').type(phone)
        cy.get('#UserPassword').type(password)
        cy.get('#UserConfirmPassword').type(password)
        cy.get('#UserNameOfInstitution').type(institutionName)
        cy.get('#UserInstitutionPhysical').type(address)
        cy.get('#UserEmail').type(email)
        cy.get('#UserQualification').type('nurse')
        cy.get('.ui-combobox-input').eq(1).type('Kenya')
            .wait(500)
            .get('.ui-autocomplete')
            .contains('Kenya')
            .click()
        cy.get('#UserSponsorEmail').type('sponsor@example.com')
        cy.get('#captchaCode')
            .invoke('text')
            .then((text) => {
              const answer = solveCaptcha(text);
            cy.get('#UserCaptcha').type(answer);
            })
          
          // Function to solve math CAPTCHA
          function solveCaptcha(captchaText) {
            const wordsToNumbers = {
              'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 
              'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
            }
          
            let parts = captchaText.split(' + ')
          
            let num1 = wordsToNumbers[parts[0].trim()] ?? parseInt(parts[0])
            let num2 = wordsToNumbers[parts[1].trim()] ?? parseInt(parts[1])
          
            return num1 + num2
          }
          
        cy.get('#ApplicationSaveChanges').click()
        cy.get('.row-fluid > .alert', {timeout: 20000})
            .contains('You have successfully registered. Please click on the link sent to your email address to activate your account')
            .should('be.visible')
    })   
    })
    