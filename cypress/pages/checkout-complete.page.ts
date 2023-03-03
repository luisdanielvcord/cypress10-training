class CheckoutCompletePage {
  private orderCompletedText: string;

  constructor() {
    this.orderCompletedText =
      "#contents_wrapper > .checkout_complete_container > h2";
  }

  public validateCompletedPurchase(textToMatch: string): void {
    cy.get(this.orderCompletedText).should("have.text", textToMatch);
  }
}

export { CheckoutCompletePage };
