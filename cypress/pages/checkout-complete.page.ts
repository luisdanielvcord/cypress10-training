class CheckoutCompletePage {
  private orderCompletedText: string;

  constructor() {
    this.orderCompletedText = ".complete-header";
  }

  public validateCompletedPurchase(textToMatch: string): void {
    cy.get(this.orderCompletedText).should("have.text", textToMatch);
  }
}

export { CheckoutCompletePage };
