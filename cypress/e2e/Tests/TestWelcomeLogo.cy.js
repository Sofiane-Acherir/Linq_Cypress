
import { WelcomePage } from "../Pages/WelcomePage";
const welcomePage=  new WelcomePage();


describe ("welcome page features", () => {
    before(() => {
        welcomePage.navigatePage();
        //    // Wait for an element that confirms page load
        //    cy.get(welcomePage.webLocators.linqLogo, { timeout: 10000 }).should("be.visible");
    });

it ("linq logo is displayed", () => {

    cy.get(welcomePage.webLocators.linqLogo).should("be.visible");
        
    cy.title().should("include", "Linq App");
   
});



});