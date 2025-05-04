import { test, expect } from '../fixtures/baseFixture.js';
import {TestConfig} from '../config/testConfig.js'
import { userData, invalidData } from './data/userData.js';



test.describe("Validate “Book a Demo” Link Navigation", () => {

    test("Navigate to 'Book a Demo'", async ({page, navBar, bookADemo}) => {
    await navBar.clickBookADemo();
    await expect(page).toHaveURL(TestConfig.urls.bookDemo);
    })
  
    test("Validate all input fields are present and interactable", async ({page, navBar, bookADemo}) => {
      await navBar.clickBookADemo();
      await bookADemo.fillInFirstName(userData.firstName);
      await bookADemo.fillInLastName(userData.lastName);
      await bookADemo.fillInEmail(userData.email);
      await bookADemo.fillInPhone(userData.phoneNumber);
      await bookADemo.fillInJobTitle(userData.jobTitle);
      await bookADemo.selectCountry(userData.country);
      await bookADemo.fillInMessage(userData.message);
      const formValues = await bookADemo.getFormValues();
      await expect(formValues.firstName).toBe(userData.firstName);
      await expect(formValues.lastName).toBe(userData.lastName);
      await expect(formValues.email).toBe(userData.email);
      await expect(formValues.phone).toBe(userData.phoneNumber);
      await expect(formValues.jobTitle).toBe(userData.jobTitle);
      await expect(formValues.country).toBe(userData.country);
  
      })

      test("Book a Demo required field validation", async ({page, navBar, bookADemo}) => {
        await navBar.clickBookADemo();
        await bookADemo.fillInFirstName(invalidData.firstName);
        await bookADemo.fillInLastName(invalidData.lastName);
        await bookADemo.fillInEmail(invalidData.email);
        await bookADemo.fillInPhone(invalidData.phoneNumber);
        await bookADemo.fillInJobTitle(invalidData.jobTitle);
        await bookADemo.selectCountry(invalidData.country);
        await bookADemo.fillInMessage(invalidData.message);
        const formValues = await bookADemo.getFormValues();
        await expect(formValues.firstName).toBe(invalidData.firstName);
        await expect(formValues.lastName).toBe(invalidData.lastName);
        await expect(formValues.email).toBe(invalidData.email);
        await expect(formValues.phone).toBe(invalidData.phoneNumber);
        await expect(formValues.jobTitle).toBe(invalidData.jobTitle);
        await expect(formValues.country).toBeUndefined;
        await expect(await bookADemo.getMissingFirstNameError()).toContain(invalidData.missingFieldError);
        
        await expect(await bookADemo.getMissingLastNameError()).toContain(invalidData.missingFieldError);
        await expect(await bookADemo.getMissingJobTitleError()).toContain(invalidData.missingFieldError);
        //await expect(await bookADemo.getMissingCountryError()).toContain(invalidData.missingFieldError);
        await expect(await bookADemo.getMissingEmailError()).toBe("");
        await expect(await bookADemo.getMissingPhoneError()).toBe("");

      })
    
  });
  