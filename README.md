Linq-Project



What is Cypress?

Installing



Install Cypress for Mac, Linux, or Windows, then get started.

npm install cypress --save-dev

or

yarn add cypress --dev

or

pnpm add cypress --save-dev



Folder Structure

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

Setup & Installation

Clone the repository:

git clone <repository-url>
cd Linq-project

Install dependencies:

npm install

Run Cypress tests:

npx cypress open

or headless:

npx cypress run

Test Report

Cypress Mochawesome Reporter is used for test reporting.

Reports are available in the cypress/reports/html/index.html file after running the tests.

Troubleshooting

If tests fail, check the Cypress logs for errors.

Ensure that all dependencies are installed correctly by running:

npm install

If Cypress does not open, try running:

npx cypress cache clear
npx cypress install

Contributing


 -  develop branch

Please see our Contributing Guideline which explains repo organization, linting, testing, and other steps.

Fork the repository.

Create a new branch:

git checkout -b feature-branch

Make your changes and commit:

git commit -m "Added new feature"

Push to your branch:

git push origin feature-branch

Create a pull request.

License



This project is licensed under the terms of the MIT license.

Badges

Configure a badge for your project's README to show your test status or test count in the Cypress Cloud.



[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

Happy Testing! 🚀





