import { Page, Locator } from "@playwright/test";

export class OrdersPlacedPage{

    readonly page: Page;
    readonly thankYouForTheOrderMsg: Locator;

    constructor(page){
        this.page = page;
        this.thankYouForTheOrderMsg = page.locator("tbody h1.hero-primary");
    }

    async validateOrderPlaced(){
        await this.thankYouForTheOrderMsg.waitFor({state: "visible"});
        return await this.thankYouForTheOrderMsg.isVisible();
    }

}