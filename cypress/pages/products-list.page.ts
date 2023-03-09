class ProductsListPage {
  private itemToPurchase: string;
  private availableItems: string;
  private shoppingBtn: string;
  private containerItems: string;
  private itemBackPack_AddBtn: string;
  private titleItem: string;
  private priceItem: string;

  constructor() {
    this.itemToPurchase = "Bolt T-Shirt";
    this.availableItems = ".inventory_item_name";
    this.shoppingBtn = ".shopping_cart_link";
    this.containerItems = "#inventory_container";
    this.itemBackPack_AddBtn = "#add-to-cart-sauce-labs-backpack";
    this.titleItem = "#item_4_title_link";
    this.priceItem =
      ":nth-child(1) >.inventory_item_description .inventory_item_price";
  }

  private findProductByName(product: string): any {
    return cy.get(this.containerItems).find(this.availableItems).filter(`:contains("${product}")`);
  }

  public selectProduct(product: string): void {
    this.findProductByName(product).click();
  }

  public goToShoppingCart(): void {
    cy.get(this.shoppingBtn).click();
  }

  public addItem(): void {
    cy.get(this.itemBackPack_AddBtn).click();
  }

  public verifyTitle(message: string): void {
    cy.get(this.titleItem).should("have.text", message);
  }

  public verifyPrice(message: string): void {
    cy.get(this.priceItem).should("have.text", message);
  }

  public displayContainer(): void {
    cy.get(this.containerItems).should("be.visible");
  }
}

export { ProductsListPage };
