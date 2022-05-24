/* eslint-disable no-undef */
/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('you portal register', () => {
  it('should register ', () => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.findName();
    const randomDescription = faker.lorem.paragraph(3);
    cy.visit('/');
    cy.get('[data-cy=\'register\']').click();
    cy.url().should('include', '/register');
    cy.get('#email').clear().type('pruebaEmail');
    cy.get('#password').clear().type('123456');
    cy.get('[data-cy=\'button-register\']').click();
    cy.get('#email').clear().type(randomEmail);
    cy.get('#password').clear().type('123456asd');
    cy.get('[data-cy="button-register"]').click();
    cy.url().should('include', '/formTemplate');
    cy.get('#name').clear().type(randomName);
    cy.get('#description').clear().type(randomDescription);
    cy.get('#file').attachFile('index.jpg');
  });
});
