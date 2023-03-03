class OverviewPage {
  private finishButton: string;

  constructor() {
    this.finishButton = "#finish";
  }

  public finishPurchase(): void {
    cy.get(this.finishButton).click();
  }
}

export { OverviewPage };
