import { Selector, t } from 'testcafe';



class PurchasePage{

constructor(){
    this.checkoutbtn = Selector('#checkout')


}

async chekout(){

    await t 
    .click(this.checkoutbtn)
}

}


export default new PurchasePage();