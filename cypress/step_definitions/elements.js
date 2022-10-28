/// <reference types="Cypress" />
import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
import ElementsPage from "../pageObjects/Elements/elements"
import {faker} from '@faker-js/faker'


const user = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.streetAddress(),
};

const FirstName = faker.name.firstName();
const LastName = faker.name.lastName();
const email = faker.internet.email();
const age = faker.random.numeric(2);
const salary = faker.datatype.number();
const department = faker.address.city();


Given(/^I navigate to the DemoQa page$/, function () {
    cy.visit('https://demoqa.com/');
});

When(/^I click on "([^"]*)" button$/, function () {
     ElementsPage.clickElementBtn();
});

Then(/^Elements page is opened$/, function () {
    cy.get('.header-text').invoke('text').should('contain', 'Elements');
    cy.url().should('contain','elements');
});

Then(/^I should be able to collapse the Elements container$/, function () {
    cy.contains('.element-group', 'Elements').within(() => {
        cy.get('.element-list').should('be.visible');
        cy.get('.header-right').click({ force : true });
        cy.get('.element-list').should('not.have.class', 'show');
        cy.get('.header-right').click({ force : true });
    });
});

When(/^I click on "([^"]*)" button as a user$/, function () {
     ElementsPage.clickTextBtn();
});

And(/^Text Box page is opened$/, function () {
    cy.url().should('contain','text-box');
});

Then(/^As a user, I should be able to submit valid data$/, function () {
    cy.wait(5000);
    cy.get('#userForm').within(() => {
        cy.fillTextBoxForm(user);
        cy.get('#submit').click();
        cy.get('#output').within(() => {
            for (const [key, value] of Object.entries(user)) {
                cy.get(`#${key}`).should('contain', value);
            }
        });
    });
});

Given(/^I navigate to the Check Box section$/, function () {
    cy.visit('/checkbox');
});

And(/^Check Box section is opened$/, function () {
    cy.url().should('contain','checkbox');
});

When(/^I click on Check Box button$/, function () {
   ElementsPage.clickCheckBoxBtn();
});

Then(/^I get the notification that I have checked all boxes$/, function () {
  cy.get('#result > span:nth-child(1)').contains('You have selected :');
});

Then(/^I don't receive a message, that I have checked all boxes$/, function () {
   ElementsPage.notSelected();
});

Given(/^I navigate to the Radio button section$/, function () {
   cy.visit('/radio-button');
});

When(/^I click on (.*) btn$/, function (buttons) {
    switch(buttons){
        case "yesRadio":
            cy.get(`[id="${buttons}"]`).click({ force : true });
            break;
        case "impressiveRadio":
            cy.get(`[id="${buttons}"]`).click({ force : true });
            break;
    }

});

And(/^Radio buttons section is opened$/, function () {
    cy.url().should('contain','radio-button');
});

Then(/^I receive a message, that I have selected (.*) radio btn$/, function (buttons,type) {
    if(buttons==="yesRadio"){
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p').should('contain',type);
    }else if(buttons==="impressiveRadio"){
        cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p').should('contain',type);
    }
});

Given(/^I navigate to the Buttons section$/, function () {
    cy.visit('/buttons');
});

And(/^Buttons section is opened$/, function () {
  cy.url().should('contain','buttons');
});

When(/^I click on (.*) buttons$/, function (buttons) {
    switch(buttons){
        case "doubleClickBtn":
            cy.get(`[id="${buttons}"]`).dblclick({ force : true });
            break;
        case "rightClickBtn":
            cy.get(`[id="${buttons}"]`).rightclick({ force : true });
            break;
        case "btn btn-primary":
            cy.get(`[class="${buttons}"]`).click({ force : true });
            break;
    }
});

Then(/^I receive a message, that I have clicked (.*) btn$/, function (buttons,type) {
    if(buttons==="doubleClickBtn"){
        cy.get('[id="doubleClickMessage"]').should('contain',type);
    }else if(buttons==="rightClickBtn"){
        cy.get('[id="rightClickMessage"]').should('contain',type);
    }else if(buttons==="lj1kE"){
        cy.get('[id="dynamicClickMessage"]').should('contain',type);
    }
});

Given(/^I navigate to the Web Tables section$/, function () {
    cy.visit('/webtables');
});

When(/^Web Tables section is opened$/, function () {
    cy.url().should('contain','webtables');
});

And(/^I add new record$/, function () {
   cy.get('[id="addNewRecordButton"]').click({ force : true });
   cy.addNewRecord(FirstName,LastName,email,age,salary,department);
   cy.get('#submit').click({ force : true })

});

Then(/^I verify that new record has been added to the table$/, function () {
cy.verifyRecord(FirstName,LastName,email,age,salary,department);
});