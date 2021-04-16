import konfigurePath from '../pages/happyPath'

describe('Crowd Desk Test - Konfiguration Happy Path', () => {

    const happypath = new konfigurePath;

    it('Happy Path test', () => {
        happypath.visit();
        happypath.cookie_close();
        happypath.konfigure_button();
        happypath.start_konfigure();
        happypath.step_1();
        happypath.step_2();
        happypath.gescahfft();
        happypath.check();
    })
})
