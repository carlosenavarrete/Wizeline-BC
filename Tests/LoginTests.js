import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import LoginPage from '../Pages/Login';
import InventoryPage from '../Pages/Inventory';

const usrdata =  require('../Data/Users.json');
const geturl = ClientFunction(() => window.location.href.toString());



fixture `Getting Started`
    .page `https://www.saucedemo.com`;

test('A) Valid User Login', async t => {
    await LoginPage.login(usrdata.User.validUsername.userName,usrdata.User.validUsername.password);
    await t.expect(geturl()).contains('inventory');
});



test('B) Invalid User Login', async t => {
    
    await LoginPage.login(usrdata.User.invalidUsername.userName,usrdata.User.invalidUsername.password);
    let errormsg = await LoginPage.geterrormsg();
    await t.expect(errormsg).eql(usrdata.User.invalidUsername.errorMessage);
});


test('C) Home Page Logout', async t => {
    await LoginPage.login(usrdata.User.validUsername.userName,usrdata.User.validUsername.password);
    await InventoryPage.logoutuser();   
    await LoginPage.isloginpage();
});
