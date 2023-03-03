class InformationPage {
  private firstNameField: string;
  private lastNameField: string;
  private postalCodeField: string;
  private continueButton: string;

  constructor() {
    this.firstNameField = "#first-name";
    this.lastNameField = "#last-name";
    this.postalCodeField = "#postal-code";
    this.continueButton = "#continue";
  }

  public fillAndSubmitForm(
    firstname: string,
    lastName: string,
    postalCode: string
  ): void {
    cy.get(this.firstNameField).type(firstname);
    cy.get(this.lastNameField).type(lastName);
    cy.get(this.postalCodeField).type(postalCode);
    cy.get(this.continueButton).click();
  }
}

export { InformationPage };
