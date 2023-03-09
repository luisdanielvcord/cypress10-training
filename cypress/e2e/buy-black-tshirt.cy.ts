import {
  LoginPage,
  ProductsListPage,
  ItemPage,
  ShoppingCartPage,
  InformationPage,
  OverviewPage,
  CheckoutCompletePage,
} from "../pages/index";

const loginPage = new LoginPage();
const productsListPage = new ProductsListPage();
const itemPage = new ItemPage();
const shoppingCartPage = new ShoppingCartPage();
const informationPage = new InformationPage();
const overviewPage = new OverviewPage();
const checkoutCompletePage = new CheckoutCompletePage();

describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // Arrange
    const validUser = {username: "standard_user", password: "secret_sauce"};
    const productToSelect = "Sauce Labs Bike Light";
    const formInformation = {
      firstName: "Cypress",
      lastName: "Workshop",
      postalCode: "00000",
    };
    const completedPurchaseText = "Thank you for your order!";
    // Action
    loginPage.visitLoginPage();
    loginPage.signIn(validUser.username, validUser.password);
    productsListPage.selectProduct(productToSelect);
    itemPage.addToCart();
    itemPage.goToCart();
    shoppingCartPage.goToCheckout();
    informationPage.fillAndSubmitForm(
        formInformation.firstName,
        formInformation.lastName,
        formInformation.postalCode,
    );
    overviewPage.finishPurchase();
    // Assertion
    checkoutCompletePage.validateCompletedPurchase(completedPurchaseText);
  });

  it("Login in sauce Page with Empty fields", () => {
    // Arrange
    const errorMessageText = "Epic sadface: Username is required";
    // Action
    loginPage.visitLoginPage();
    loginPage.clickLoginButton();
    // Assertion
    loginPage.verifyErrorMessage(errorMessageText);
  });

  it("Login in sauce Page with Valid credentials", () => {
    // Arrange
    const validUser = {username: "standard_user", password: "secret_sauce"};
    const backpackTitle = "Sauce Labs Backpack";
    const backpackPrice = "$29.99";
    // Action
    loginPage.visitLoginPage();
    loginPage.signIn(validUser.username, validUser.password);
    productsListPage.addItem();
    // Assertion
    productsListPage.displayContainer();
    productsListPage.verifyTitle(backpackTitle);
    productsListPage.verifyPrice(backpackPrice);
  });
});

