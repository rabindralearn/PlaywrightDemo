
//importing to class
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const { CartAndCheckOutPage } = require('../pageobjects/CartAndCheckOutPage');
const { PaymentAndPlaceOrder } = require('../pageobjects/PaymentAndPlaceOrder');
const { OrderPage } = require('../pageobjects/OrderPage');

class POManager {

    constructor(page) {
        this.page = page;
        this.LoginPage = new LoginPage(page);
        this.DashboardPage = new DashboardPage(page);
        this.CartAndCheckOutPage = new CartAndCheckOutPage(page);
        this.PaymentAndPlaceOrder = new PaymentAndPlaceOrder(page);
        this.OrderPage = new OrderPage(page);

    }

    getLoginPage() {
        return this.LoginPage;
    }

    getDashboardPage() {
        return this.DashboardPage;
    }

    getCartAndCheckOutPage() {
        return this.CartAndCheckOutPage;
    }

    getPaymentAndPlaceOrder() {
        return this.PaymentAndPlaceOrder;
    }

    getOrderPage() {
        return this.OrderPage;
    }



}//end of class

module.exports = { POManager };