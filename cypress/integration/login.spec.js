/* eslint-disable no-undef */
/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('you portal register', () => {
  it('should register ', () => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.findName();
    const randomDescription = faker.lorem.paragraph(3);
    const randomIntroduction = faker.lorem.paragraph(3);
    const randomDesing = faker.lorem.paragraph();
    const randomFront = faker.lorem.paragraph();
    const randomBack = faker.lorem.paragraph();
    const avatar = ['index.jpg', 'avatar2.jpg', 'avatar3.jpg', 'avatar4.jpg', 'avatar5.jpg', 'avatar6.jpg'];
    const x = Math.floor(Math.random() * 3);
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
    cy.get('#file').attachFile(avatar[x]);
    cy.get('[data-cy="button-next"]').click();
    cy.get('#introduction').clear().type(randomIntroduction);
    cy.get('#experience').clear().type(Math.floor(Math.random() * 10));
    cy.get('#proyects').clear().type(Math.floor(Math.random() * 10));
    cy.get('#jobs').clear().type(Math.floor(Math.random() * 10));
    cy.get('[data-cy="button-next"]').click();
    cy.get('#desing').clear().type(randomDesing);
    cy.get('#front').clear().type(randomFront);
    cy.get('#back').clear().type(randomBack);
    cy.get('[data-cy="button-next"]').click();
    // section academic
    cy.get(':nth-child(1) > :nth-child(1) > .my-2 > #institute').clear().type(faker.company.bs());
    cy.get(':nth-child(1) > :nth-child(2) > .my-2 > #achievements').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(1) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-addEducation"]').click();
    cy.get(':nth-child(2) > :nth-child(1) > .my-2 > #institute').clear().type(faker.company.bs());
    cy.get(':nth-child(2) > :nth-child(2) > .my-2 > #achievements').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(2) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-addEducation"]').click();
    cy.get(':nth-child(3) > :nth-child(1) > .my-2 > #institute').clear().type(faker.company.bs());
    cy.get(':nth-child(3) > :nth-child(2) > .my-2 > #achievements').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(3) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-addEducation"]').click();
    cy.get(':nth-child(4) > :nth-child(1) > .my-2 > #institute').clear().type(faker.company.bs());
    cy.get(':nth-child(4) > :nth-child(2) > .my-2 > #achievements').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(4) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-next"]').click();
    // section job
    cy.get(':nth-child(1) > :nth-child(1) > .my-2 > #business').clear().type(faker.company.bs());
    cy.get(':nth-child(1) > :nth-child(2) > .my-2 > #descriptionJob').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(1) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-addEducation"]').click();
    cy.get(':nth-child(2) > :nth-child(1) > .my-2 > #business').clear().type(faker.company.bs());
    cy.get(':nth-child(2) > :nth-child(2) > .my-2 > #descriptionJob').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(2) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-addEducation"]').click();
    cy.get(':nth-child(3) > :nth-child(1) > .my-2 > #business').clear().type(faker.company.bs());
    cy.get(':nth-child(3) > :nth-child(2) > .my-2 > #descriptionJob').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(3) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-addEducation"]').click();
    cy.get(':nth-child(4) > :nth-child(1) > .my-2 > #business').clear().type(faker.company.bs());
    cy.get(':nth-child(4) > :nth-child(2) > .my-2 > #descriptionJob').clear().type(faker.lorem.paragraph());
    cy.get(':nth-child(4) > .justify-end > [data-cy="button-saveAcademic"]').click();
    cy.get('[data-cy="button-next"]').click();
    // section Contact
    cy.get('#email').clear().type(randomEmail);
    cy.get('#ubication').clear().type(`${faker.address.cityName()} - ${faker.address.country()}`);
    cy.get('#facebook').clear().type('https://es-la.facebook.com/');
    cy.get('#github').clear().type('https://github.com/');
    cy.get('#numberContact').clear().type('+573195230949');
    cy.get('[data-cy="button-next"]').click();
    cy.wait(9000);
    cy.get('[data-cy="button-next"]').click();
    cy.wait(2000);
    cy.get('[data-cy="button-sendInformation"]').click();
  });
});
