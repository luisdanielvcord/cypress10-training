class ShoppingCartPage {
  private checkoutButton: string;

  constructor() {
    this.checkoutButton = "#checkout";
  }

  public goToCheckout(): void {
    cy.get(this.checkoutButton).click();
  }
}

export { ShoppingCartPage };
