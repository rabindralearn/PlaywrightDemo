const { expect } = require('@playwright/test');

class PaymentAndPlaceOrder {

    constructor(page) {
        this.page = page;
        this.placeOrder = page.locator(".action__submit");
        this.confirmMsg = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async shippingInfo(countryName, selectCountryName) {
        await this.page.getByPlaceholder('Select Country').pressSequentially(countryName, { delay: 150 })
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();

            console.log("text:::" + text + " " + i);

            if (text === selectCountryName) {
                await dropdown.locator("button").nth(i).click();
                console.log("Selected india succcessfully");
                break;
            }
        }
    }



    //click Place order
    async clickPlaceOrder() {
        //Locator for place order and clicking PlaceOrder button
        await this.placeOrder.click()
    }

    //verify order
    async verifyMessageAndCaptureOrder() {
        await expect(this.confirmMsg).toHaveText(" Thankyou for the order. ");
        return await this.orderId.textContent();
    }



}//end of class

module.exports = { PaymentAndPlaceOrder }

