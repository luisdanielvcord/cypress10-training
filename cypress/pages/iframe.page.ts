class IFramePage {
  private loginURL: string;
  private pageIFrame: string;
  private pageTitle: string;
  private linkCSSPage: string;
  private pathCSSPage: string;

  constructor() {
    this.loginURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.pageIFrame = '[title="W3Schools HTML Tutorial"]';
    this.linkCSSPage = '[title="CSS Tutorial"]';
    this.pageTitle = "#main > h1";
    this.pathCSSPage = "/css";
  }

  public visit() {
    cy.visit(this.loginURL);
  }

  public getFrameTitle(titleToMatch: string) {
    cy.iframe(this.pageIFrame)
      .find(this.pageTitle)
      .should("have.text", titleToMatch);
  }

  public goToCssPageIFrame() {
    cy.iframe(this.pageIFrame).find(this.linkCSSPage).click();
    cy.frameLoaded(this.pageIFrame, { url: this.pathCSSPage });
  }
}

export { IFramePage };
