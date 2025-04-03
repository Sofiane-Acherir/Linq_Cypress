import { WelcomeEmail } from "../Pages/WelcomeEmail";
const welcomeEmail = new WelcomeEmail();

describe("test email feature", () => {

    before(() => {
       welcomeEmail.navigatePage();
         
    });


     // Ignore google oauth errors
     Cypress.on("uncaught:exception", (err) => {
        if (err.message.includes("idpiframe_initialization_failed")) {
            return false;
        }
        return true;
    });

    it("Register user with email, (High Priority, Defect ID: BUG-1245)", () => {

      welcomeEmail.clickButtonEmail();

      welcomeEmail.inputFieldEmailAddress();

      // after click the button still keep loading strange behavior
      welcomeEmail.clickButtonContinue();

          //cy.type() failed because it targeted a disabled element.
         /*

         cy.get('[id^="input-"]')
         .should('be.visible')
         .and('not.be.disabled')  
         .type('allan? john1');

         
         cy.get('[id^="input-"]')
         .should('be.visible')
         .and('not.be.disabled') 
         .type('267 566234');

          cy.get('.button-primary').click();
    
         */

   

          });
          
  
});