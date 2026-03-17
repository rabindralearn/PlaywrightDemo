class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInBtn = page.locator("[value='Login']");
    }


    async GoTo() {
        await this.page.goto("URL of the site where test is carried out");
    }

    async validLogin(email, password) {

        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInBtn.click();

        
   await this.page.waitForLoadState('networkidle');
   await this.page.locator(".card-body b").first().waitFor();

    }

}//end of class

module.exports={LoginPage};

