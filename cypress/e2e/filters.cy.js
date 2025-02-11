describe("Filters", () => {
    it("User should be able to filter products by categories", () => {
        cy.visit("/");
        cy.get('a[title=Women]').click();
        cy.get("#layered_category_8").click();
        cy.get("#layered_category_8").should("be.checked");
        cy.get('#layered_category_8').uncheck();  
        cy.get('#layered_category_8').should("not.be.checked")  


        

    })
})