import { Locator, Page, expect, test } from "@playwright/test";
export abstract class BasePage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async validateElementText(element: Locator, expectedText: string) {
        await test.step(`Validating that a correct elemet text is  ${expectedText}`, async () => {
            try{
                await expect(element).toContainText(expectedText);}
            catch (error){
                console.error(`Unable to validate ${element} text`, error)
            }
        });
    }

    protected async clickElement(element: Locator) {
        await test.step(`Clicking the '${element}' element`, async() => {
            try{
                await element.click();
            }
            catch (error){
                console.error(`Unable to click ${element}`, error)
            }
        })
    }

    protected async fillText(element: Locator, textToFill: string) {
        await test.step(`Filling '${textToFill}' into the '${element}' element`, async() => {
            try{
                await element.fill(textToFill);
            }
            catch (error){
                console.error(`Unable to fill text in ${element}`, error)
            }
            
        })
    }

    protected async getCurrentPageUrl(): Promise<string>{
        const currentUrl = await this.page.url();
        return currentUrl.trim();
    }

    protected async hoverElement_(element: Locator){
        await element.hover();
    }

    protected async hoverElement(menuElement: Locator, elementToSee:Locator )
    {
        const timeout = 5000;
        const interval = 500;
        const maxAttemps = timeout / interval;
        let attemps = 0;

        while (attemps < maxAttemps){
            try{
                console.log(`this is attemp ${attemps}`)
                await menuElement.hover({force: true});
                await this.page.waitForTimeout(200);
                await elementToSee.waitFor({state: 'visible', timeout: interval});
                return;
            }
            catch(error){
                console.log(`attemps no. ${attemps} failed, retrying`)
                await this.page.mouse.move(0, 0);
                attemps++;
                if(attemps >= maxAttemps){
                    throw new Error(`failed to hover over element within ${timeout / 1000} seconds`);
                }
            }
        }
    }

    protected async titleCase(value: string): Promise<string>{
        try{
        return value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase + word.slice(1)).join(' ');

        }
        catch (error){
            console.error(`Unable to normalize the text: ${value}`, error)
            return value ;
        }
    }

    protected async getInputValue(element: Locator): Promise<string>{
        try{
            const text = await element.inputValue()
            return text;
        }
        catch (error){
            console.error(`Unable to exract text from ${element}`)
            return ""
        }
    }

    protected async getElementFontSize(element: Locator): Promise<number>{
        const fontSize = await element.evaluate(el => window.getComputedStyle(el).fontSize);
        return parseFloat(fontSize);
    }

   
}