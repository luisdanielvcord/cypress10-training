class UploadPage {
  private loginURL: string;
  private fileUploadButton: string;
  private submitButton: string;
  private uploadedFilesText: string;

  constructor() {
    this.loginURL = "https://the-internet.herokuapp.com/upload";
    this.fileUploadButton = "#file-upload";
    this.submitButton = "#file-submit";
    this.uploadedFilesText = "#uploaded-files";
  }

  public visitURL(): void {
    cy.visit(this.loginURL);
  }

  public uploadAndSubmit(file: string): void {
    cy.get(this.fileUploadButton).attachFile(file);
    cy.get(this.submitButton).click();
  }

  public validateUploadedFile(textToMatch: string): void {
    cy.get(this.uploadedFilesText).should("contain.text", textToMatch);
  }
}

export { UploadPage };
