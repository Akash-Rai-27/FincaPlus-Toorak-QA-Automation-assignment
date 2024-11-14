exports.CartPage = class CartPage {
    constructor(page){
        this.page = page;
        this.cartItemName = ".inventory_item_name";
    }

    async verifyCartItem(expectedName) {
        const itemName = await this.page.textContent(this.cartItemName);
        return itemName === expectedName;
    }
}