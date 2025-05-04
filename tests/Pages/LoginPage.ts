import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    //========================locators========================
    readonly page: Page;
    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginsubmitbutton: Locator;
    readonly loginSuccessMsg: Locator;

    //========================variables========================
    loginSuccesstext: string;

    //========================constructor========================
    constructor(page: Page) {
  

        this.loginButton = page.locator('#login2');
        this.userNameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginsubmitbutton = page.locator("//button[normalize-space()='Log in']");
        this.loginSuccessMsg = page.locator("#nameofuser");

        this.loginSuccesstext = "Welcome " + "mohamedmohy"; 
    }

    //========================actions========================
    async userlogin() {
        await this.loginButton.click();
        await this.userNameInput.waitFor({ state: 'visible' });
        await this.userNameInput.fill("mohamedmohy"); 
        await this.passwordInput.fill("123456");
        await this.loginsubmitbutton.click();
    }

    //========================assertions========================
    async assertLoginSuccess() {
        await expect(this.loginSuccessMsg).toContainText(this.loginSuccesstext);
    }
}
