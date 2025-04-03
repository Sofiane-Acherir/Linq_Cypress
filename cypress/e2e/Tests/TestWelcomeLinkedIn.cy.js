import { WelcomeLinkedIn } from "../Pages/WelcomeLinkedIn";
const welcomeLinkedIn = new WelcomeLinkedIn();





describe("LinkedIn OAuth Test", () => {
    before(() => {
      welcomeLinkedIn.navigatePage();
  
      // Stub window.open so it navigates in the same tab
      cy.window().then((win) => {
        cy.stub(win, "open").callsFake((url) => {
          cy.visit(url); // Force navigation in the same tab
        });
      });
    });
  
    // Handle uncaught exceptions
    Cypress.on("uncaught:exception", (err) => {
      console.warn("Ignoring uncaught exception:", err.message);
      return false;
    });
  
  

    it("Priority: High - Verify LinkedIn OAuth Redirection (Defect ID: BUG-5678)", { retries: 2 }, () => {
        
        welcomeLinkedIn.clickLinkedInLink();

        // Specification:
        // - Clicking on the LinkedIn button should open the OAuth login page.
        // - The test should verify that the page URL contains 'linkedin.com/oauth/v2/authorization'
        cy.url().should('include', 'linkedin.com/oauth/v2/authorization');
    });

  });