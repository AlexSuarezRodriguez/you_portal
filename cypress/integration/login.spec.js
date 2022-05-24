/* eslint-disable no-undef */
/// <reference types="Cypress" />
// const { faker } = require('@faker-js/faker');

describe('you portal register', () => {
  it('should register ', () => {
    cy.visit('/');
    cy.get('[data-cy=\'register\']').click();
    cy.url().should('include', '/register');
    cy.get('#email').clear().type('pruebaTest@');
    cy.get('#password').clear().type('123456');
    cy.get('[data-cy=\'button-register\']').click();
    cy.get('#email').clear().type('pruebaTest@gmail.com');
    cy.get('#password').clear().type('123456asd');
    cy.get('[data-cy="button-register"]').click();
  });
});
