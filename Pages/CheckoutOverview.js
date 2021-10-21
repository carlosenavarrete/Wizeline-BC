import { Selector, t } from 'testcafe';



class CheckOutOverviewPage{

constructor(){
    this.finishbtn = Selector('#finish')
}

async FinishCheckout(){

    await t
    .click(this.finishbtn)

    

}




}


export default new CheckOutOverviewPage();