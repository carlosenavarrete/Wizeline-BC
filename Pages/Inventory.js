import { Selector, t } from 'testcafe';



class InventoryPage{

constructor(){
    
    this.menubtn = Selector('#react-burger-menu-btn');
    this.logoutbtn = Selector('#logout_sidebar_link');
    this.sortSelect = Selector('.product_sort_container');
    this.sortOption = this.sortSelect.find('option');
    this.selectOnsie = Selector('#add-to-cart-sauce-labs-onesie');
    this.selectbikelight = Selector('#add-to-cart-sauce-labs-bike-light');
    this.selectcartbtn = Selector('.shopping_cart_link');
    
}

async selectmultiple(){

    await t
    .click(this.selectOnsie)
    .click(this.selectbikelight)
    .click(this.selectcartbtn)
}

async selectitemOnesie(){
    await t
    .click(this.selectOnsie)
    .click(this.selectcartbtn)

}

async select_low_hi(){

    await t
    .click(this.sortSelect)
    .click(this.sortOption.withText('Price (low to high)'))
}

async logoutuser(){

    await t
    .click(this.menubtn)
    .click(this.logoutbtn)
}

}

export default new InventoryPage();