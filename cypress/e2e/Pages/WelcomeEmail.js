export class WelcomeEmail{

locatorEmail ={
     "emailInputField": '[id^="input-"]',
     "buttonClick" : '.button-primary'



};

      navigatePage () {
        cy.visit(Cypress.env('URL'));
      };



      clickButtonEmail () {
        
        cy.contains("span", "Email", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });
          
      };
  
      inputFieldEmailAddress() {
        cy.get(this.locatorEmail.emailInputField)
        .should('be.visible')
        .type('test@example.com');
         
      };
  
  
      clickButtonContinue(){
          cy.get(this.locatorEmail.buttonClick).click();
  
      };
  

};