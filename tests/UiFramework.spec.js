import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { LogoutPage } from "../pages/LogoutPage";


test("Ui Test", async({page})=>{

    try {
        
        // 1. login
        const login = new LoginPage(page)
        await login.gotoLoginPage();
        await login.login("standard_user","secret_sauce");
        await page.waitForTimeout(3000);

        // 2. verify login success
        await expect.soft(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        const validate = await page.locator("//span[@class='title']")
        await expect.soft(validate).toBeVisible();
        await expect.soft(validate).toContainText("Products");

        
        // 3. product page -- get first product and add to cart

        const product = new ProductPage(page);
        const productDetail = await product.getFirstProduct();
        await product.addProduct();
        await product.navigateToCart();

        // 4. cart

        const cart = new CartPage(page)
        const productInCart = await cart.verifyCartItem(productDetail.name);
        expect(productInCart).toBeTruthy();

        // 5. logout

        const logout = new LogoutPage(page);
        await logout.logout();

    } catch (error) {
        console.log("Error: ",error)
    }

    

})