
class OrderPage {

   constructor(page) {
      this.page = page;
      this.clickOrders = page.locator("button[routerlink*='myorders']");

   }

   async clickOrdersPage() {

      await this.clickOrders.click();
      await this.page.locator("tbody").waitFor();

   }


   async verifyOrderOrderPage(orderId) {

      const rows = await this.page.locator("tbody tr");
      for (let i = 0; i < await rows.count(); i++) {
         const rowOrderId = await rows.nth(i).locator("th").textContent();
         if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
         }
      }
   }


}//End of Class

module.exports = { OrderPage };





