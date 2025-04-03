🐞 Bug Report: Cypress Automation Tests

📌 Project: Linq-project🛠 Test Suite: Smoke

2️⃣ BUG-1234: Invalid email is incorrectly accepted

🔍 Issue Description:The test case testEmailFeature fails because the system does not reject an invalid email format.

📝 Steps to Reproduce:

Navigate to the LinqApp homepage.

Click on the "Sign in with Email" button.

Enter an invalid email address (test@example.com).

Check if an error message is displayed or if the email is accepted incorrectly.

⚠️ Actual Result:The email is accepted without displaying a validation error.

✅ Expected Result:The system should reject an invalid email format and display an appropriate error message.

🖼 Evidence (TestWelcomeEmail.cy.js.mp4)

Console Log: "BUG-1234: System should reject invalid email but does not!"

🚨 Defect Severity: P0 (Critical) – Must be fixed immediately.

4️⃣ BUG-5678: LinkedIn OAuth Redirection Fails

🔍 Issue Description:The test case LinkedIn OAuth Test fails because clicking on the LinkedIn login button does not redirect properly to LinkedIn’s OAuth page.

📝 Steps to Reproduce:

Navigate to the LinqApp homepage.

Click on "Sign in with LinkedIn".

Observe whether the page redirects to linkedin.com/oauth/v2/authorization.

⚠️ Actual Result:Redirection does not occur properly.

✅ Expected Result:The user should be redirected to LinkedIn’s OAuth page upon clicking the LinkedIn login button.

🖼 Evidence (Screenshots):

Console Log: "BUG-5678: LinkedIn OAuth redirection failed."

Screenshot  :LinkedIn OAuth Test -- Priority High - Verify LinkedIn OAuth Redirection (Defect ID BUG-5678) (failed)(attempt4).png

Screen Recorder: TestWelcomeLinkedIn.cy.js.mp4

 

🚨 Defect Severity: P1 (High Priority) – Needs to be fixed soon.

📌 Additional Notes:

Tests are recorded  for debugging purposes.

screenshots are captured for further analysis.

📝 Reported by: Sofiane Acherir📅 Date: 04/03/2025

