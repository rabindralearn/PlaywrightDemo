const { expect } = require('@playwright/test');
class CartAndCheckOutPage {

    constructor(page) {
        this.page = page;
        this.checkOut = page.locator("text=Checkout");
        this.cartItems = page.locator("div li");
        this.matchItem = page.locator("h3:has-text('ZARA COAT 3')");
    }

    async verifyItemAdded() {
        const bool = await this.matchItem.isVisible();
        await expect(bool).toBeTruthy();

    }

    async clickCheckOut() {
        await this.checkOut.click();


    }



}//end of class

module.exports = { CartAndCheckOutPage };

