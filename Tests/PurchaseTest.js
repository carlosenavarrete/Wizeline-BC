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

        await LoginPage.login(usrdata.User.validUsername.userName,usrdata.User.validUsername.password);
        await InventoryPage.selectitemOnesie();
        await PurchasePage.chekout();
        await CheckoutPage.fillandcheckout(usrdata.User.customer.firstName,usrdata.User.customer.lastName,usrdata.User.customer.zipCode);
        await CheckoutOverviewPage.FinishCheckout();
        let completemsg = await CheckoutCompletePage.getcompletemsg();
        await t.expect(completemsg).eql('THANK YOU FOR YOUR ORDER');
    });
    