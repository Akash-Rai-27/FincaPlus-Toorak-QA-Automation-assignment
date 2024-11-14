exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.userNameInput = "//input[@id='user-name']";
        this.passwordInput = "//input[@id='password']";
        this.loginBtn = "//input[@id='login-button']";
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username,password){
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginBtn).click();
    }

}