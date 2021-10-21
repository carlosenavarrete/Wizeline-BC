import { ClientFunction } from 'testcafe';

import LoginPage from '../Pages/Login';
import InventoryPage from '../Pages/Inventory';
import PurchasePage from '../Pages/Purchase';
import CheckoutPage from '../Pages/CheckOut';
import CheckoutOverviewPage from '../Pages/CheckoutOverview';
import CheckoutCompletePage from '../Pages/CheckoutComplete';

const usrdata =  require('../Data/Users.json');




fixture `Getting Started`
    .page `https://www.saucedemo.com`;



    test('I) Complete a Purchase', async t => {

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
        
    
        await t
        PurchasePage.chekout();
    
        await t
        .wait(1000);
    
    
        await t 
        CheckoutPage.fillandcheckout(usrdata.User.customer.firstName,usrdata.User.customer.lastName,usrdata.User.customer.zipCode);
    
        await t
        .wait(1000);
    
        await t 
        CheckoutOverviewPage.FinishCheckout();
    
        await t
        .wait(1000);
    
    
        
    
        let completemsg = await CheckoutCompletePage.getcompletemsg();
    
       
        //await t.expect(Selector("h3").withAttribute("data-test").textContent).eql('Epic sadface: Sorry, this user has been locked out.');
        //compare the msg with the actual error msg
        await t.expect(completemsg).eql('THANK YOU FOR YOUR ORDER');
    
    });
    