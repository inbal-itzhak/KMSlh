1.
-  First I would check that all navigation menu items navigate to the cprrect url
-  Second I would check all Book A Demo form fields for valid\invalid data (for instance put letters in the phone field)
these tests test main user workflows (in addition to the tests you provided in the document).

3. Design and document 2 manual test cases:
**TC #1**
**Title:** Verify that all links in the main navigation menu navigate to the correct pages.
**Priority:** High
**Steps:**
1. Open the KMS Lighthouse website in a web browser.
2. For each link in the navigation menu:
    a. Hover over the link (if applicable).
    b. Click on the link.
    c. Observe the URL in the browser's address bar.
    d. Verify that the page content corresponds to the link's label.
    e. Navigate back to the homepage to test the next link.

**Expected Result:**
- Each link in the main navigation menu navigates to the correct and relevant page.
according to this list:
  home: "https://kmslh.com/",
      bookDemo: "https://kmslh.com/book-a-demo/",
      integrations: "https://kmslh.com/integrations/",
      solutionSelfService: "https://kmslh.com/solution-self-service/",
      solutionCallCenter: "https://kmslh.com/solution-call-center/",
      soluitionOnboarding: "https://kmslh.com/solution-onboarding/",
      solutionFieldService: "https://kmslh.com/solution-field-service/",
      resources: "https://kmslh.com/resources/",
      resourcesBlog: "https://kmslh.com/blog/",
      resourcesVideos: "https://kmslh.com/video/",
      resourcesEvents: "https://kmslh.com/events/",
      resourcesNews: "https://kmslh.com/news/",
      resourcesGuides: "https://kmslh.com/guides/",
      resourcesWebinars: "https://kmslh.com/webinar/",
      resourcesReports: "https://kmslh.com/reports/",
      resourcesROICalc: "https://kmslh.com/roi-calculator/",
      caseStudies: "https://kmslh.com/case-studies/",
      aboutAboutUs: "https://kmslh.com/about-us/",
      aboutCareers: "https://kmslh.com/careers/",
      aboutLHUniversity: "https://kmslh.com/kms-lighthouse-university/",
      aboutContactUs: "https://kmslh.com/contact-us/"

**TC #2** 
**Title:** Book a Demo required field validation
**Priority:** High
**Steps:**
 1. Open the KMS Lighthouse website in a web browser.
 2. Click on Book a Demo button
 3. Submit form for each of the following options:
 3. All fields empty.
 4. Fill in some of the required fields and submit form.
 5. Fill in all required fields without selecting a country.
**Expected Result:**
Each required field should show "Please complete this required field." message.
(Messaeg field is not required)



