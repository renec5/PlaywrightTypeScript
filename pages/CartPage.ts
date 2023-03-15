import { Page, Locator } from "@playwright/test";
import { PlaceOrderPage } from "../pages/PlaceOrderPage";

export class CartPage{

    readonly page: Page;
    readonly checkoutBtn: Locator;
    readonly placeOrderPage: PlaceOrderPage;

    constructor(page){
        this.page = page;
        this.checkoutBtn = page.locator("div.subtotal button.btn-primary");
        this.placeOrderPage = new PlaceOrderPage(page);
    }

    async goToCheckout(){
        await this.checkoutBtn.click();
        await this.placeOrderPage.placeOrderBtn.textContent();
        
    }
    
}

module.exports = { CartPage };