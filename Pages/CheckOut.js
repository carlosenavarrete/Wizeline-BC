import { Selector, t } from 'testcafe';

class CheckOutPage{

constructor(){
    this.firstname = Selector('#first-name');
    this.lastname = Selector('#last-name')
    this.postalcode = Selector('#postal-code')
    this.continuebtn = Selector('#continue')
}


async fillandcheckout(firstname,lastname,postalcode){   
    await t
    .typeText( this.firstname, firstname)
    .typeText(this.lastname, lastname)
    .typeText(this.postalcode,postalcode)
    .click(this.continuebtn)
}
}
export default new CheckOutPage();
