import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { signupPage } from '../Pages/SignUpPage';
import { LoginPage } from '../Pages/LoginPage';
import { OrderPage } from '../Pages/OrderPage';

//========================variables======================
let loginPage: LoginPage;
let signup: signupPage;
let homepage: HomePage;
let orderPage: OrderPage;

//========================Hooks======================
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');

  signup = new signupPage(page);
  loginPage = new LoginPage(page); // Pass the signup instance to LoginPage
  homepage = new HomePage(page);
  orderPage = new OrderPage(page);
});

test.describe.serial('User Flow', () => {
  test('Signup', async ({ page }) => {
    await signup.signup();
    await signup.assertSignUpSuccess();
  });

  test('login', async ({ page }) => {
    await loginPage.userlogin(); // Login using the credentials from the signup
    await loginPage.assertLoginSuccess();
  });

  test('CreateOrder', async ({ page }) => {
    await homepage.addToCart();
    await homepage.assertLoginSuccess();
    await homepage.goToCart();
    await orderPage.placeOrder();
    await orderPage.assertLoginSuccess();
  });
  test('Logout', async ({ page }) => {
    await loginPage.userlogin();
    await homepage.logout();
    await homepage.assertLogoutSuccess();
  });
});
