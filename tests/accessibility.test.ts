import { test, expect } from '../fixtures/baseFixture.js';

test.describe("Validate accessibility widget checkboxes", () => {

    test("verify accessibility widget opens", async ({page, accessibility}, testInfo) => {
        console.log(`Running on ${testInfo.project.name}`);
        await accessibility.OpenAccessibilityWidget();
        await expect(await accessibility.isAccessibilityMenuOpen()).toBe(true);
    })

    test("Validate Default State of Accessibility Toggles", async ({page, accessibility}) => {
        await accessibility.OpenAccessibilityWidget();
        await accessibility.checkDefaultToggleState();
    })

    test("Verify Bigger Text toggle's expected behaviour" , async ({page, accessibility}) => {
        await accessibility.checkIncreaseTextFunctionality();
})
})
