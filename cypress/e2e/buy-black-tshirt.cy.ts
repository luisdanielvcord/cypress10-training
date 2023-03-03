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
    loginPage.visitLoginPage();
    loginPage.signIn();

    productsListPage.selectShirt();
    itemPage.addToCart();
    itemPage.goToCart();
    shoppingCartPage.goToCheckout();
    informationPage.fillAndSubmitForm("Cypress", "Workshop", "00000");
    overviewPage.finishPurchase();
    checkoutCompletePage.validateCompletedPurchase("Thank you for your order!");
  });
});
