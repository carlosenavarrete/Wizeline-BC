import { Selector, t } from 'testcafe';



class CheckOutCompletePage{

constructor(){
    this.completehdr = Selector('.complete-header');
    
}

async getcompletemsg(){

    let complete = await this.completehdr.innerText

  return complete;


}




}


export default new CheckOutCompletePage();