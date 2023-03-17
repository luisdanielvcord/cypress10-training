class DownloadPage {
  private loginURL: string;
  private downloadButton: string;

  constructor() {
    this.loginURL = "https://demoqa.com/upload-download";
    this.downloadButton = "#downloadButton";
  }

  public visitURL(): void {
    cy.visit(this.loginURL);
  }

  public downloadPicture(): void {
    cy.get(this.downloadButton).click();
  }

  public validateDownloadedFile(fileName: string): void {
    cy.readFile(`cypress/downloads/${fileName}`).should("exist");
  }
}

export { DownloadPage };
