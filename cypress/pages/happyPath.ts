import data from '../fixtures/testData.json'

export default class konfigurePath {
    get(arg0: string) {
        throw new Error('Method not implemented.');
    }

    visit(){
        cy.visit(data.url);
    }

    konfigure_button(){
        cy.get(data.konfigure_button).click();
    }

    start_konfigure(){
        cy.get(data.start_button).click();
    }

    step_1(){
        cy.get(data.step_1).click();
    }

    step_2(){
        cy.get(data.step_2).click();
    }

    gescahfft(){
        cy.get(data.gescahfft).click();
    }

    cookie_close(){
        cy.get(data.cookie_button).click();
    }

    check(){
        let test_result:boolean = false;
        if((cy.get(data.list_item_02).should('contain.text', data.expect_list_02)) && (cy.get(data.list_list_03).should('contain.text', data.expect_list_03))){
           return test_result = true; 
        }else{
            return test_result = false;
        }
    }
}