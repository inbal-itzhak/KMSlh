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
      await bookADemo.bookADemoFull(userData.firstName,userData.lastName,userData.email,userData.phoneNumber,userData.jobTitle,userData.country,userData.message);
      const formValues = await bookADemo.getFormValues();
      await expect.soft(formValues.firstName).toBe(userData.firstName);
      await expect.soft(formValues.lastName).toBe(userData.lastName);
      await expect.soft(formValues.email).toBe(userData.email);
      await expect.soft(formValues.phone).toBe(userData.phoneNumber);
      await expect.soft(formValues.jobTitle).toBe(userData.jobTitle);
      await expect.soft(formValues.country).toBe(userData.country);
      await expect.soft(formValues.message).toBe(userData.message);
  
      })

      test("Book a Demo required field validation", async ({page, navBar, bookADemo}) => {
        await navBar.clickBookADemo();
        await bookADemo.bookADemoFull(invalidData.firstName,invalidData.lastName,invalidData.email,invalidData.phoneNumber,invalidData.jobTitle,invalidData.country,invalidData.message );
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
        await expect(await bookADemo.getMissingCountryError()).toBe("");
        await expect(await bookADemo.getMissingEmailError()).toBe("");
        await expect(await bookADemo.getMissingPhoneError()).toBe("");

      })
    
  });
  