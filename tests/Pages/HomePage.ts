import { expect ,type Locator, type Page} from '@playwright/test';
export class HomePage {
//========================locators========================

readonly page: Page;
readonly monitors: Locator;
readonly monitor24: Locator;
readonly addToCartButton: Locator;
readonly cartButton: Locator;
readonly cartitem: Locator;
readonly logoutButton: Locator;

//========================variables======================

//========================constructor========================
constructor(page: Page) {
    this.page = page;
    this.monitors = page.locator("(//a[normalize-space()='Monitors'])[1]");
    this.monitor24 = page.getByText("Apple monitor 24");
    this.addToCartButton = page.locator("text=Add to cart");
    this.cartButton = page.locator('#cartur');
    this.cartitem = page.getByText("Apple monitor 24");
    this.logoutButton = page.locator('#logout2');

}
//========================methods========================

//========================actions========================
async addToCart() {
    await this.monitors.click();
    await this.monitor24.click();
    await this.addToCartButton.click();
}
async goToCart() {
    await this.cartButton.click();
}
async logout() {
    await this.logoutButton.click();
}

//========================assertions========================
async assertLoginSuccess() {
    await expect(this.cartitem).toBeVisible();  
}
async assertLogoutSuccess() {
    await expect(this.logoutButton).toBeHidden();  
}
}