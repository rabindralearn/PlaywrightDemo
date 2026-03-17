const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

const inputdata = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

test('@Purchase Item', async ({ page }) => {
  
   const pomanager = new POManager(page);

   //Login to the application
   const loginPage = pomanager.getLoginPage();
   await loginPage.GoTo();
   await loginPage.validLogin(inputdata.username, inputdata.password);


   //Select Item and add to cart
   const dashboardPage = pomanager.getDashboardPage();
   //Search Product and add to cart
   await dashboardPage.searchProductAddCart(inputdata.productname);
   //Click Cart
   await dashboardPage.navigateTocart();

   //Verify in cart page the item is added and checkOut
   const cartandcheckoutPage = pomanager.getCartAndCheckOutPage();
   await cartandcheckoutPage.verifyItemAdded();
   await cartandcheckoutPage.clickCheckOut();

   //Enter general information for payment and place order
   const paymentandplaceOrder = await pomanager.getPaymentAndPlaceOrder();
   await paymentandplaceOrder.shippingInfo(inputdata.countryname, inputdata.selectCountryName);
   await paymentandplaceOrder.personalInformation();
   await paymentandplaceOrder.clickPlaceOrder();
   const saveorder = await paymentandplaceOrder.verifyMessageAndCaptureOrder();


   //On order page,verify the order is displayed
   const orderPage = pomanager.getOrderPage();
   await orderPage.clickOrdersPage();
   await orderPage.verifyOrderOrderPage(saveorder);

});
