/// <reference types="Cypress" />
import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
import FormsPage from "../pageObjects/Forms/forms"
import {faker} from '@faker-js/faker'


const FirstName = faker.name.firstName();
const LastName = faker.name.lastName();
const email = faker.internet.email();
const Number = faker.random.numeric(10);
const CurrentAddress = faker.address.streetAddress();


When(/^I navigate to the DemoQa page as a user$/, function () {
    cy.visit('https://demoqa.com/');
});

And(/^I click on Forms button$/, function () {
    FormsPage.clickFormsBtn();
});

Given(/^Forms page is opened$/, function () {
    cy.get('.header-text').invoke('text').should('contain', 'Forms');
    cy.url().should('contain','forms');
});

Then(/^I should be able to collapse the Forms container as a user$/, function (){
    cy.contains('.element-group', 'Forms').within(() => {
        cy.get('.element-list').should('be.visible');
        cy.get('.header-right').click({ force : true });
        cy.get('.element-list').should('not.have.class', 'show');
        cy.get('.header-right').click({ force : true });
    });
});

When(/^I click on "([^"]*)" Btn$/, function () {
      FormsPage.clickPracticeFormBtn();
});

Then(/^Practice form page is opened$/, function () {
     cy.url().should('contains','automation-practice-form');
});

When(/^I fill all the boxes$/, function () {
     cy.viewport(1500,1500);
     cy.fillPracticeForm(FirstName,LastName,email,Number,CurrentAddress);

})
Then(/^I get a message letting me know that I submitted the form$/, function () {
    cy.get('[id="example-modal-sizes-title-lg"]').should('contain','Thanks for submitting the form');
});

When(/^I click on submit button$/, function () {
   cy.get('[id="submit"]').click({ force : true });
});

When(/^Some boxes I filled, the others I didn't fill$/, function () {
    cy.get('[id="firstName"]').clear().type(FirstName);
    cy.get('[id="lastName"]').clear().type(LastName);
});
Then(/^I didn't get a message letting me know that I submitted the form$/, function () {
    cy.get('[id="example-modal-sizes-title-lg"]').should('not.exist');

});