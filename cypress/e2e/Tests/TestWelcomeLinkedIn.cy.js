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

    // Intercept the network request for LinkedIn OAuth API
    cy.intercept('GET', '**/linkedin**').as('linkedinRequest');
    
    // Wait for the LinkedIn request to complete
    cy.wait('@linkedinRequest');

    // Verify the page contains 'LinkedIn' in a span element
    cy.get('span', { timeout: 30000 }).contains('LinkedIn');
  });
});
