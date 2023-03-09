class ItemPage {
  private addToCartButton: string;
  private cartButton: string;

  constructor() {
    this.addToCartButton = '[data-test^="add-to-cart"]';
    this.cartButton = "#shopping_cart_container";
  }

  public addToCart(): void {
    cy.get(this.addToCartButton).click();
  }

  public goToCart(): void {
    cy.get(this.cartButton).click();
  }
}

export { ItemPage };
