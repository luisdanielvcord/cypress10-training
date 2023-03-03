class ProductsListPage {
  private itemToPurchase: string;

  constructor() {
    this.itemToPurchase = ".inventory_item_label > a";
  }

  public selectShirt(): void {
    cy.get(this.itemToPurchase).eq(2).click();
  }
}

export { ProductsListPage };
