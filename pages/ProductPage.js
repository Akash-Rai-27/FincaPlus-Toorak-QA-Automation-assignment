const fs = require('fs');

exports.ProductPage = class ProductPage {
    constructor(page){
        this.page = page;
        this.productList = "(//div[@class='inventory_item'])";
        this.firstProductName = ".inventory_item_name";
        this.firtProductPrice = ".inventory_item_price";
        this.addToCartButton = ".btn_inventory";
        this.cartIcon = ".shopping_cart_link"
    }

    async getFirstProduct(){
        const name = await this.page.textContent(this.firstProductName);
        const price = await this.page.textContent(this.firtProductPrice);

        fs.writeFileSync('productDetails.txt',`Name : ${name}\nPrice: ${price}`);

        return {name,price};
    }

    async addProduct(){
        await this.page.click(this.addToCartButton);
    }

    async navigateToCart(){
        await this.page.click(this.cartIcon);
    }

}