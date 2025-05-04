import { expect, type Locator, type Page } from '@playwright/test';
//import { signupPage } from './SignUpPage';

export class LoginPage {
    //========================locators========================
    readonly page: Page;
    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginsubmitbutton: Locator;
    readonly loginSuccessMsg: Locator;

    //========================variables========================
    //readonly signupv: signupPage;
    loginSuccesstext: string;

    //========================constructor========================
    constructor(page: Page) {
        // this.page = page;
        // this.signupv = signupv;

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
        await this.userNameInput.fill("mohamedmohy"); // Use the stored username directly
        await this.passwordInput.fill("123456");
        await this.loginsubmitbutton.click();
    }

    //========================assertions========================
    async assertLoginSuccess() {
        await expect(this.loginSuccessMsg).toContainText(this.loginSuccesstext);
    }
}
