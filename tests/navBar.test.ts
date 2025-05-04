import { test, expect } from '../fixtures/baseFixture.js';
import {TestConfig} from '../config/testConfig.js'

test.describe("Verify that all links in the main navigation menu navigate to the correct pages", () => {

  test("Call Center inside 'Our Solutions' redirects to Call Center page", async ({page, navBar}) => {
    await navBar.hoverOurSolutions();
    await navBar.clickSolutionsCallCenter();
    await expect(page).toHaveURL(TestConfig.urls.solutionCallCenter);
  })

  test("Case studies link goes to correct url", async ({page, navBar}) => {
    await navBar.clickCaseStudies();
    await expect(page).toHaveURL(TestConfig.urls.caseStudies);
  })

  test("resources News redirects to correct url", async ({page, navBar}) => {
    await navBar.hoverResources();
    await navBar.clickResourcesNews();
    await expect(page).toHaveURL(TestConfig.urls.resourcesNews);
  })

  test("KMS logo redirects to homepage", async ({page, navBar}) => {
  await navBar.clickKMSLogo();
  await expect(page).toHaveURL(TestConfig.urls.home);
  })
  
});


