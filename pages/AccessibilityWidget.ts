import { expect, Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage.js";

export class AccessibilityWidget extends BasePage{

    private widget: Locator;
    private accessibilityMenuOpen: Locator
    private keyboard: Locator;
    private isKeyboardChecked: Locator;
    private animations: Locator;
    private isAnimationsChecked: Locator;
    private contrast: Locator;
    private isContrastChecked: Locator;
    private increaseText: Locator;
    private isIncreaseTextChecked: Locator;
    private increaseTextCheckBox: Locator;
    private decreaseText: Locator;
    private isDecreaseTextChecked: Locator
    private readableFont: Locator;
    private isReadableFontChecked: Locator
    private markTitles: Locator;
    private isMarkTitlesChecked: Locator;
    private underlineLinks: Locator;
    private isUnderlineLinksChecked: Locator
    private h1Text: Locator;
    private h2Text: Locator;
    private h3Text: Locator;
    

    constructor(page: Page) {
        super(page);
        this.widget = this.page.locator("#acwp-toolbar-btn-wrap>#acwp-toolbar-btn");
        this.accessibilityMenuOpen = this.page.locator("#acwp-toolbar>#acwp-toolbar-module");
        this.keyboard = this.page.locator("[data-name='keyboard']");
        this.isKeyboardChecked = this.page.locator("#acwp-toggler-keyboard");
        this.animations = this.page.locator("[data-name='animations']");
        this.isAnimationsChecked = this.page.locator("#acwp-toggler-animations");
        this.contrast = this.page.locator("[data-name='contrast']");
        this.isContrastChecked = this.page.locator("#acwp-toggler-contrast");
        this.increaseText = this.page.locator("[data-name='incfont']");
        this.isIncreaseTextChecked = this.page.locator("#acwp-toggler-incfont");
        this.increaseTextCheckBox = this.page.locator("label[for='acwp-toggler-incfont']");
        this.decreaseText = this.page.locator("[data-name='decfont']");
        this.isDecreaseTextChecked = this.page.locator("#acwp-toggler-decfont");
        this.readableFont = this.page.locator("[data-name='readable']");
        this.isReadableFontChecked = this.page.locator("#acwp-toggler-readable");
        this.markTitles = this.page.locator("[data-name='marktitles']");
        this.isMarkTitlesChecked = this.page.locator("#acwp-toggler-marktitles");
        this.underlineLinks = this.page.locator("[data-name='underline']");
        this.isUnderlineLinksChecked = this.page.locator("#acwp-toggler-underline");
        this.h1Text = this.page.locator(".elementor-widget-container h1");
        this.h2Text = this.page.locator(".elementor-widget-container h2");
        this.h3Text = this.page.locator(".elementor-widget-container h3");
    }

    public async OpenAccessibilityWidget()
    {
        this.clickElement(this.widget);
    }

    public async isAccessibilityMenuOpen()
    { 
        try{
            await this.accessibilityMenuOpen.waitFor({state: 'visible', timeout: 10000});
            return await this.accessibilityMenuOpen.isVisible();
        }
        catch (error){
            console.log("accessibility menu is not visible", error)
            return false;
        }
    }

    public async isKeyboardStateOn(): Promise<boolean>{
        return await this.isKeyboardChecked.isChecked();
    }

    public async isAnimationsStateOn(): Promise<boolean>{
        return await this.isAnimationsChecked.isChecked();
    }

    public async isContrastStateOn(): Promise<boolean>{
        return await this.isContrastChecked.isChecked();
    }

    public async isIncreaseTextStateOn(): Promise<boolean>{
        return await this.isIncreaseTextChecked.isChecked();
    }

    public async isDecreaseTextStateOn(): Promise<boolean>{
        return await this.isDecreaseTextChecked.isChecked();
    }

    public async isReadableFontStateOn(): Promise<boolean>{
        return await this.isReadableFontChecked.isChecked();
    }

    public async isMarkTitlesStateOn(): Promise<boolean>{
        return await this.isMarkTitlesChecked.isChecked();
    }

    public async isUnderlineLinksStateOn(): Promise<boolean>{
        return await this.isUnderlineLinksChecked.isChecked();
    }

    public async togglrIncreaseText(){
        await this.clickElement(this.increaseTextCheckBox);
    }

    public async checkDefaultToggleState(expectedState: Boolean = false)
    {
        const toggles = [
            {name: 'Keyboard', locator: this.isKeyboardChecked},
            {name: 'Animations', locator: this.isAnimationsChecked},
            {name: 'Contrast', locator: this.isContrastChecked},
            {name: 'Increase Text', locator: this.isIncreaseTextChecked},
            {name: 'DecreaseText', locator: this.isDecreaseTextChecked},
            {name: 'Readable Font', locator: this.isReadableFontChecked},
            {name: 'Mark Titles', locator: this.isMarkTitlesChecked},
            {name: 'Underline Links', locator: this.isUnderlineLinksChecked}
        ];

        for (const toggle of toggles){
            const isChecked = await toggle.locator.isChecked();
            console.log(`checking ${toggle.name}: expected: ${expectedState}, actual: ${isChecked}`)
            expect(isChecked).toBe(expectedState)
        }
    }

    public async checkIncreaseTextFunctionality()
    {
        const locators = [this.h1Text, this.h2Text, this.h3Text];
        await this.OpenAccessibilityWidget();
        for(const locator of locators){
            const count = await locator.count();
            for(let i=0; i<count; i++){
                const el = locator.nth(i);
                const text = await el.textContent() ?? "[no text]";
                const fontSizeBefore = await this.getElementFontSize(el);
                await this.togglrIncreaseText();
                const fontSizeAfter = await this.getElementFontSize(el);
                console.log(`Element with text: ${text}, iterration ${i} font size before: ${fontSizeBefore}, after: ${fontSizeAfter}`);
                await expect(fontSizeAfter).toBeGreaterThan(fontSizeBefore);
                await this.togglrIncreaseText();
                const smallerFontSize = await this.getElementFontSize(el);
                console.log(`Element with text: ${text}, iterration ${i} font bigger size  ${fontSizeAfter}, after unchecking increase text toggle: ${smallerFontSize}`);
                await expect(fontSizeAfter).toBeGreaterThan(smallerFontSize);

            }
        }
    }
}