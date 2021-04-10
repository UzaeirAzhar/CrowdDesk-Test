import data from '../fixtures/testData.json'

export default class konfigurePath {

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
}