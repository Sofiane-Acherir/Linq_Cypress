export class WelcomeLinkedIn {

locatorLinks = {



};

navigatePage () {
    cy.visit(Cypress.env('URL'));
  };

clickLinkedInLink() {
    cy.contains("span", "LinkedIn", { timeout: 10000 })
      .should("be.visible")
      .should("exist");

    cy.contains("span", "LinkedIn").invoke('removeAttr', 'target').click();

// Handle the cross-origin LinkedIn authentication page
    cy.origin("https://www.linkedin.com", () => {
        cy.url().should("include", "linkedin.com/oauth/v2/authorization");
      });
  };

};