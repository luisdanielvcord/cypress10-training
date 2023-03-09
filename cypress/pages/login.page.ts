class LoginPage {
  private loginURL: string;
  private userNameField: string;
  private passwordField: string;
  private loginButton: string;
  private emptyMessageError: string;

  constructor() {
    this.loginURL = "http://saucedemo.com/";
    this.userNameField = "#user-name";
    this.passwordField = "#password";
    this.loginButton = "#login-button";
    this.emptyMessageError = ".error-message-container";
  }

  public visitLoginPage(): void {
    cy.visit(this.loginURL);
  }

  public clickLoginButton(): void{
    cy.get(this.loginButton).click();
  }

  public signIn(username: string, password: string): void {
    cy.get(this.userNameField).type(username);
    cy.get(this.passwordField).type(password);
    this.clickLoginButton();
  }

  public verifyErrorMessage(message: string): void {
    cy.get(this.emptyMessageError).should("have.text", message);
  }
}

export { LoginPage };
