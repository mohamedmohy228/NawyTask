import { expect ,type Locator, type Page} from '@playwright/test';
export class signupPage {
//========================locators========================

readonly page: Page;
readonly signupButton: Locator;
readonly SignupUserName: Locator;
readonly SignupPass: Locator;
readonly SignupSubmitButton: Locator

//========================variables======================
readonly randomNumber = Math.floor(10000 + Math.random() * 90000);
readonly userName = "mohamed" + this.randomNumber;
readonly userPassword = "1234@Mohy";
//========================constructor========================
constructor(page: Page) {
    this.signupButton = page.locator('#signin2');
    this.SignupUserName = page.locator('#sign-username');
    this.SignupPass = page.locator('#sign-password');
    this.SignupSubmitButton = page.locator("button[onclick='register()']");
    this.page = page;   
}
//========================methods========================
// async getUpdatedUserName(): Promise<string> {
//     // Return the stored username directly
//     return this.userName;
// }
//========================actions========================
async signup() {
    await this.signupButton.click();
    await this.SignupUserName.fill(this.userName);
    await this.SignupPass.fill(this.userPassword);
    await this.SignupSubmitButton.click();
}
//========================assertions========================
async assertSignUpSuccess() {
    await expect(this.SignupSubmitButton).toBeHidden();
}
}