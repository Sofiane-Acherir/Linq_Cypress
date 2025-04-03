Test Setup for LinqApp Automation (Cypress)

🛠️ Chosen Tool: Cypress (JavaScript)

🔹 Why Cypress?

Fast, reliable, and easy-to-use for UI testing.

Built-in support for assertions and automatic waiting.

Real-time test execution with an interactive test runner.

Supports JavaScript and runs directly in the browser.

Easily integrates with CI/CD pipelines.

⚙️ Setup Instructions

1️⃣ Prerequisites

Ensure you have the following installed:

Node.js (LTS version) → Download Here

Cypress → Installed via npm/yarn

IDE: VS Code or any preferred editor

2️⃣ Project Setup

Step 1: Clone the Repository

git clone <repository-url>
cd Linq-project

Step 2: Install Dependencies

npm install

Step 3: 📂 Project Structure

Linq-project/
│── cypress/
│   ├── e2e/
│   │   ├── TestWelcomeEmail.cy.js
│   │   ├── TestWelcomeLinkedIn.cy.js
│   │   ├── TestWelcomeLogo.cy.js
│   ├── fixtures/
│   │   ├── example.json
│   ├── reports/
│   │   ├── html/
│   │   │   ├── assets/
│   │   │   ├── screenshots/
│   │   │   ├── videos/
│   │   │   ├── index.html
│   ├── screenshots/
│   ├── support/
│   │   ├── commands.js
│   ├── videos/
│   │   ├── TestWelcomeEmail.cy.js.mp4
│   │   ├── TestWelcomeLinkedIn.cy.js.mp4
│   │   ├── TestWelcomeLogo.cy.js.mp4
│── node_modules/
│── cypress.config.js
│── package.json
│── package-lock.json

3️⃣ Running the Tests

Option 1: Open Cypress Test Runner

npx cypress open

Option 2: Run Tests Headlessly

npx cypress run

4️⃣ Test Reporting

Cypress uses Mochawesome for generating reports.

Reports are available in cypress/reports/html/index.html after running tests.

5️⃣ Troubleshooting

If tests fail, check Cypress logs for errors:

npx cypress cache clear
npx cypress install

Ensure all dependencies are installed correctly:

npm install

6️⃣ Integrate with CI/CD (GitHub Actions)

Cypress can be easily integrated into GitHub Actions:

name: linq-project
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      # Install npm dependencies, cache them correctly
      # and run all Cypress tests
      - name: Cypress run
        uses: cypress-io/github-action@v6

🚀 Happy Testing! 🎯