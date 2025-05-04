import { expect ,type Locator, type Page} from '@playwright/test';
export class OrderPage {
//========================locators========================

readonly page: Page;
readonly cartButton: Locator;
readonly placeOrderButton: Locator;
readonly nameInput: Locator;
readonly countryInput: Locator;
readonly cityInput: Locator;
readonly creditCardInput: Locator;
readonly monthInput: Locator;
readonly yearInput: Locator;
readonly purchaseButton: Locator;
readonly successMessage: Locator;

//========================variables======================

//========================constructor========================
constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('#cartur');
    this.placeOrderButton = page.locator("(//button[normalize-space()='Place Order'])[1]");
    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.creditCardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');
    this.purchaseButton = page.locator("//button[normalize-space()='Purchase']");
    this.successMessage = page.locator("//h2[normalize-space()='Thank you for your purchase!']");

}
//========================methods========================

//========================actions========================
async placeOrder() {
    await this.placeOrderButton.click();
    await this.nameInput.fill("Mohamed");
    await this.countryInput.fill("Egypt");
    await this.cityInput.fill("Cairo");
    await this.creditCardInput.fill("1234567890123456");
    await this.monthInput.fill("12");
    await this.yearInput.fill("2025");
    await this.purchaseButton.click();
    
}


//========================assertions========================
async assertLoginSuccess() {

    await expect(this.successMessage).toBeVisible();

}
}