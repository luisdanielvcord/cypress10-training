describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login-box > form > div > input").first().type("standard_user");
    cy.get(".login-box > form > div > input").last().type("secret_sauce");
    cy.get("input[type='submit']").click();

    cy.get(".inventory_item_label > a").eq(2).click();
    cy.get("button.btn_primary").click();
    cy.get("#shopping_cart_container").click();
    cy.get("#checkout").click();

    cy.get("#first-name").type("Cypress");
    cy.get("#last-name").type("Workshop");
    cy.get("#postal-code").type("00000");
    cy.get("#continue").click();

    cy.get("#finish").click();

    cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
        "have.text",
        "Thank you for your order!",
    );
  });
});
