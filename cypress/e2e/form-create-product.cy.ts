/// <reference types="cypress" />

describe('Form Create Product', () => {
    beforeEach(() => {
        cy.visit('/dashboard/products/create');
    });

    it('should render tag input', () => {
        cy.get('input[name="tag"]').should('exist');
    });

    // it('should add tag', () => {
    //     cy.get('input[name="tag"]').type('tag1');
    //     cy.get('input[name="tag"]').type('{enter}');
    //     cy.get('input[name="tag"]').type('tag2');
    //     cy.get('input[name="tag"]').type('{enter}');
    //     cy.get('input[name="tag"]').type('tag3');
    //     cy.get('input[name="tag"]').type('{enter}');
    //     cy.get('input[name="tag"]').type('tag4');
    //     cy.get('input[name="tag"]').type('{enter}');
    // });

    it('should add tags', () => {
        cy.get('input[name="tag"]').type('tag1').type('{enter}');
        cy.get('input[name="tag"]').type('tag2').type('{enter}');
        cy.get('input[name="tag"]').type('tag3').type('{enter}');
        cy.get('input[name="tag"]').type('tag4').type('{enter}');

        cy.get('#tags-container').children().should('have.length', 4);

        cy.get('#tags-container').children().eq(0).should('have.text', 'tag1');
        cy.get('#tags-container').children().eq(1).should('have.text', 'tag2');
        cy.get('#tags-container').children().eq(2).should('have.text', 'tag3');
        cy.get('#tags-container').children().eq(3).should('have.text', 'tag4');
    });

    it('should delete tag', () => {
        cy.get('input[name="tag"]').type('tag1').type('{enter}');
        cy.get('#tags-container').children().eq(0).click();
        cy.get('#tags-container').children().should('have.length', 0);
    });

    
});


