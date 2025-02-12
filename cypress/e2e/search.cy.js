describe("Search", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("User should be able to search for a product", () => {
        cy.get('#search_query_top')
        .should('be.visible')
        .click()
        .type('dress');
        cy.get('#search_query_top').should('have.value', 'dress');
        cy.get('[name="submit_search"]').click();

    });

    it( "User should be able to clear selected product", () => {
        cy.get('#search_query_top')
        .should('be.visible')
        .click()
        .type('blouse');
        cy.get('#search_query_top').should('have.value', 'blouse');
        cy.get('#search_query_top').clear(); 
        cy.get('#search_query_top').should('have.value', '');

    });

    it( "User should be able to go to the search results page", () => {
        cy.get('#search_query_top')
        .should('be.visible')
        .click()
        .type('dress{enter}');
      
    });

})