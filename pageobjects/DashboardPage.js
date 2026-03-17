class DashboardPage {


   constructor(page) {
      this.page = page;
      this.products = page.locator(".card-body");
      this.cart = page.locator("[routerlink*='cart']");
      this.cartItems = page.locator("div li");
   }

   async searchProductAddCart(productName) {

      const countTotalitems = await this.products.count();
      for (let i = 0; i < countTotalitems; i++) {
         if (await this.products.nth(i).locator("b").textContent() === productName) {
            //add to cart
            await this.products.nth(i).locator("text= Add To Cart").click();
            break;
         }
      }

   }

   async navigateTocart() {
      await this.cart.click();//

      //for synchronization
      await this.page.locator("div li").first().waitFor();


   }



}//end of class

module.exports = { DashboardPage };