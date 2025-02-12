describe("Filters", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('a[title=Women]').click();
    
    });


    it("User should be able to filter products by categories", () => {
        cy.get("#layered_category_8").click();
        cy.get("#layered_category_8").should("be.checked");
        cy.get("#layered_category_8").uncheck();  
        cy.get("#layered_category_8").should("not.be.checked")  

    });

    it("User should be able to filter products by size", () => {
        cy.get("#layered_id_attribute_group_3").click();
        cy.get("#layered_id_attribute_group_3").should("be.checked");
        cy.get("#ul_layered_id_attribute_group_1").its("length").should("be.greaterThan", 0);
        cy.get("#layered_id_attribute_group_3").uncheck();  
        cy.get("#layered_id_attribute_group_3").should("not.be.checked")
    });


    it("User should be able to filter products by colors", () => {
        cy.get("#layered_id_attribute_group_11").click();
        cy.get("#layered_form .color-option.on")
        .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("#layered_id_attribute_group_11").click();  
        cy.get("#layered_form .color-option.on").should("not.exist");;
    });


    it("User should be able to change filter products by colors", () => {
        cy.get("#layered_id_attribute_group_11").click();
        cy.get("#layered_form .color-option.on")
        .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("#layered_id_attribute_group_11").click();  
        cy.get("#layered_id_attribute_group_11").should("not.have.class", "on");
        cy.get("#layered_id_attribute_group_14").click();
        cy.get("#layered_form .color-option.on")
        .should("have.css", "border-color", "rgb(255, 0, 0)");
    });


    it("User should be able to filter products by properties", () => {
        cy.get("#layered_id_feature_18").click();
        cy.get("#layered_id_feature_18").should("be.checked");
        cy.get("#ul_layered_id_feature_7").its("length").should("be.greaterThan", 0);
        cy.get("#layered_id_feature_18").uncheck();  
        cy.get("#layered_id_feature_18").should("not.be.checked");

        cy.get("#layered_id_feature_21").click();
        cy.get("#layered_id_feature_21").should("be.checked");
        cy.get("#ul_layered_id_feature_7").its("length").should("be.greaterThan", 0);

        cy.get("#layered_id_feature_17").click();
        cy.get("#layered_id_feature_17").should("be.checked");
        cy.get("#ul_layered_id_feature_7").its("length").should("be.greaterThan", 0);
        cy.get('input[type="checkbox"]:checked')  
        .should('have.length', 2);


    });


});