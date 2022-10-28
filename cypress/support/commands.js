// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
/// <reference types="cypress" />
import './commands';



Cypress.Commands.add('fillPracticeForm',(FirstName,LastName,email,Number,CurrentAddress) => {
    cy.get('[id="firstName"]').clear().type(FirstName);
    cy.get('[id="lastName"]').clear().type(LastName);
    cy.get('[id="userEmail"]').clear().type(email);
    cy.get('[id="gender-radio-1"]').click({ force : true});
    cy.get('[id="userNumber"]').clear().type(Number);
    cy.get('[id="hobbies-checkbox-1"]').click({ force : true });
    cy.get('[id="currentAddress"]').clear().type(CurrentAddress);
    cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click({ force : true });
    cy.get('#react-select-3-option-0').click({force:true})
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click({ force : true });
    cy.get('#react-select-4-option-0').click({ force : true });

})
Cypress.Commands.add('addNewRecord',(FirstName,LastName,email,age,salary,department) => {
    cy.get('[id="firstName"]').clear().type(FirstName);
    cy.get('[id="lastName"]').clear().type(LastName);
    cy.get('[id="userEmail"]').clear().type(email);
    cy.get('[id="age"]').clear().type(age);
    cy.get('[id="salary"]').clear().type(salary);
    cy.get('[id="department"]').clear().type(department);
});

Cypress.Commands.add('verifyRecord',(FirstName,LastName,email,age,salary,department)=>{
    cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(1)').should('contain',FirstName);
    cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(2)').should('contain',LastName);
    cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(4)').should('contain',email);
    cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(3)').should('contain',age);
    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('contain',salary);
    cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(6)').should('contain',department);
})

Cypress.Commands.add('fillTextBoxForm', (user) => {
    cy.get('#userName').clear().type(user.name);
    cy.get('#userEmail').clear().type(user.email);
    cy.get('#currentAddress').clear().type(user.currentAddress);
    cy.get('#permanentAddress').clear().type(user.permanentAddress);
});
