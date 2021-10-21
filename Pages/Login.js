import { Selector, t } from 'testcafe';


class LoginPage {

constructor()
{    this.username = Selector('#user-name');
     this.pass = Selector('#password');
     this.logbutton = Selector('#login-button');
     this.errordisp = Selector("h3").withAttribute("data-test");

}


async login (username,pass){
    
    await t
    .typeText( this.username, username)
    .typeText(this.pass, pass)
    .click(this.logbutton)


}

async geterrormsg(){

    let errormsg = await this.errordisp.innerText

  return errormsg;


}

async isloginpage(){

    let islog = this.logbutton.exists;
    
    await t.expect(islog).ok();
    
}


}

export default new LoginPage();