class PersonalFormPage {
  private loginURL: string;
  private firstNameField: string;
  private lastNameField: string;
  private emailField: string;
  private genderRadioButtons: string;
  private dateOfBirthField: string;
  private mobileNumberField: string;
  private hobbieBoxes: any;
  private addressField: string;
  private stateCityContainer: string;
  private stateDropdownDefault: string;
  private cityDropdownDefault: string
  private submitButton: string;
  private submittedBoxTitle: string;

  constructor() {
    this.loginURL = "https://demoqa.com/automation-practice-form";
    this.firstNameField = "#firstName";
    this.lastNameField = "#lastName";
    this.emailField = "#userEmail";
    this.genderRadioButtons = "#genterWrapper";
    this.dateOfBirthField = "#dateOfBirthInput";
    this.mobileNumberField = "#userNumber";
    this.hobbieBoxes = ".custom-checkbox";
    this.addressField = "#currentAddress";
    this.stateCityContainer = "#stateCity-wrapper"; //
    this.stateDropdownDefault = "Select State"; //
    this.cityDropdownDefault = "Select City"; //
    this.submitButton = "#submit";
    this.submittedBoxTitle = "#example-modal-sizes-title-lg";
  }

  public visitURL(): void {
    cy.visit(this.loginURL);
  }

  public fillForm(formInformation: any): void {
    cy.get(this.firstNameField).type(formInformation.name);
    cy.get(this.lastNameField).type(formInformation.lastName);
    cy.get(this.emailField).type(formInformation.email);
    cy.get(this.genderRadioButtons).contains(formInformation.gender).click();
    cy.get(this.mobileNumberField).type(formInformation.mobileNumber);
    cy.get(this.dateOfBirthField).type("{selectAll}" + formInformation.dateOfBirth + "{enter}");
    for (const hobbie of formInformation.hobbies){
        cy.get(this.hobbieBoxes).contains(hobbie).click();
    }
    cy.get(this.addressField).type(formInformation.currentAddress);
    cy.get(this.stateCityContainer).contains(this.stateDropdownDefault).type(formInformation.state + "{enter}");
    cy.get(this.stateCityContainer).contains(this.cityDropdownDefault).type(formInformation.city + "{enter}");
    cy.get(this.submitButton).click();
  }

  public validateSubmittedForm(textToMatch: string): void {
    cy.get(this.submittedBoxTitle).should("have.text", textToMatch);
  }
}

export { PersonalFormPage };
