import { Page, Locator } from "@playwright/test";

export class OrdersPage{

    page: Page;
    orderRows: Locator;
    yourOrdersLabel: Locator;
    noOrdersAtThisTime: Locator;
    goBackToCartBtn: Locator;
    goBackToShop: Locator;

    constructor(page: Page){
        this.page = page;
        this.orderRows = page.locator("table.table tbody tr");
        this.yourOrdersLabel = page.locator("h1.ng-star-inserted");
        this.noOrdersAtThisTime = page.locator("div.ng-star-inserted").first();
        this.goBackToCartBtn = page.locator("button[routerlink='/dashboard/cart']").locator("text=Go Back to Cart");
        this.goBackToShop = page.locator("button[routerlink='/dashboard/']").locator("text=Go Back to Shop");
    }

    async validateOrder(orderNumber: string){
        let flag: Boolean = false;
        if ((await this.yourOrdersLabel.isVisible()) || (await this.noOrdersAtThisTime.isVisible())){
            for(let i = 0; i < await this.orderRows.count(); i++){
                // let orderNumber: string = (await this.orderRows.nth(i).locator('th').textContent())!.trim();
                // await console.log({orderNumber});
                if (orderNumber == (await this.orderRows.nth(i).locator('th').textContent())!.trim()){
                    flag = true;
                }
            }
        }
        return flag;
    }

    async deleteOrders(){
        for(let i = 0; i < await this.orderRows.count(); i++){
            await this.orderRows.nth(i).locator("button.btn-danger").click();
        }
    }

}