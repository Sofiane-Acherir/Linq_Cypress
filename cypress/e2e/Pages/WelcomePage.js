export class WelcomePage {

    webLocators = {

        "linqLogo" : "[class='w-fit z-10']",
        "emailButton" : "//div[@class='flex flex-col gap-4 pb-4']//ion-button[1]",
        "emailAddressField" : "input[id*='input-']",
        "signUpText" : "[data-test='pageHeader:title']"
        
    };


    navigatePage () {
        cy.visit(Cypress.env('URL'));
      };

};