exports.LogoutPage = class Logout{
    constructor(page){
        this.page = page;
        this.menu = "//button[@id='react-burger-menu-btn']"
        this.logoutBtn = "//a[@id='logout_sidebar_link']"
    }

    async logout(){
        await this.page.click(this.menu);
        await this.page.click(this.logoutBtn);
    }
}