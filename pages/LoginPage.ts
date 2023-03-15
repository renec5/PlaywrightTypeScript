import { ShoppingPage } from "../pages/ShoppingPage";
import { Page, Locator } from "@playwright/test";

export class LoginPage{
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    signInBtn: Locator;
    shoppingPage: ShoppingPage;

    constructor(page: Page){
        this.page = page;
        this.usernameField = page.locator("input#userEmail");
        this.passwordField = page.locator("input#userPassword");
        this.signInBtn = page.locator("input#login");
        this.shoppingPage = new ShoppingPage(page);
    }

    async enterEmail(username){
        await this.usernameField.type(username);
    }

    async enterPassword(password){
        await this.passwordField.type(password);
    }
    
    async clickLoginButton(){
        await this.signInBtn.click();
    }

    async login(username, password){
        await this.enterEmail(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        // const shoppingPage = new ShoppingPage(this.page);
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.shoppingPage.products.locator('b').first().textContent()
        ]);
        // await this.page.waitForLoadState('networkide');
    }

    async validateLoginSuccessfull(){
        const shoppingPage = new ShoppingPage(this.page);
        return await shoppingPage.validateShoppingLandingPage();
    }


}

module.exports = { LoginPage };