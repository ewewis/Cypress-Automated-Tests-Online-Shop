describe("Search", () => {
    it("User should be able to search for a product", () => {
        cy.visit("/");
        cy.get('#search_query_top')
        .should('be.visible')
        .click()
        .type('dress');
        cy.get('#search_query_top').should('have.value', 'dress');
        cy.get('[name="submit_search"]').click();

    })

})