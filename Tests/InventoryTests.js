import { ClientFunction } from 'testcafe';

import LoginPage from '../Pages/Login';
import InventoryPage from '../Pages/Inventory';

const usrdata =  require('../Data/Users.json');

fixture `Getting Started`
    .page `https://www.saucedemo.com`;



    
const getPrices = ClientFunction(() => {
    const select  = document.querySelector('#inventory_container');
    const options = select.querySelectorAll('.inventory_item_price');
    const price  = [];

    for (let option of options)
        price.push(option.textContent);

    return price;
});

const getCartProducts = ClientFunction(() => {
    const list  = document.querySelector('.cart_list');
    const content = list.querySelectorAll('.inventory_item_name');
    const names  = [];

    for (let product of content)
        names.push(product.textContent);

    return names;
});




test('D)Sort Price Low-hi', async t => {
    // Test code
 
    await t
    await LoginPage.login(usrdata.User.validUsername.userName,usrdata.User.validUsername.password);
   
    await t
    .wait(1000)
    InventoryPage.select_low_hi();

    await t.expect(getPrices()).eql(['$7.99', '$9.99', '$15.99','$15.99','$29.99','$49.99']);
});




test('E) Shopping Cart Multiple', async t => {
    // Test code
    
    await t
    //type in username and password
    await LoginPage.login(usrdata.User.validUsername.userName,usrdata.User.validUsername.password);
   
    await t
    .wait(1000)
    //click in two products and cart icon
    await t
    InventoryPage.selectmultiple();

    await t
    .wait(1000)
    
    
    await t.expect(getCartProducts()).eql(['Sauce Labs Onesie', 'Sauce Labs Bike Light']);
    
});




test('F) Shopping Cart Onsie', async t => {
    // Test code
    
    await t
    //type in username and password for login
    await LoginPage.login(usrdata.User.validUsername.userName,usrdata.User.validUsername.password);
   
    await t
    .wait(1000)
    //add onsie product and cart icon
    await t 
    InventoryPage.selectitemOnesie();

    await t
    .wait(1000)
    
    
    await t.expect(getCartProducts()).eql(['Sauce Labs Onesie']);
    
});


