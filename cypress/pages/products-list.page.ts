class ProductsListPage {
  private itemToPurchase: string;

  constructor() {
    this.itemToPurchase = "Bolt T-Shirt";
  }

  public selectShirt(): void {
    cy.contains(this.itemToPurchase).click();
  }
}

export { ProductsListPage };
