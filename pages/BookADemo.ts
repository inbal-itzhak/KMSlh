import { errors, FrameLocator, Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage.js";
import { TestConfig } from "config/testConfig.js";

export class BookADemo extends BasePage{

    private firstNameField: Locator;
    private lastNameField: Locator;
    private emailField: Locator;
    private phoneField: Locator;
    private jobTitleField: Locator;
    private messageField: Locator;
    private countryDDB: Locator;
    private bookADemoBTN: Locator;
    private frameCalander: FrameLocator;
    private calanderHeader: Locator;
    private closeCalanderBtn: Locator;
    private thankYouMessage: Locator;
    private missingFirstNameError: Locator;
    private missingLastNameError: Locator;
    private missingEmailError: Locator;
    private missingJobTitleError: Locator;
    private missingPhoneError: Locator;
    private missingCountryError: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameField = this.page.locator("[name='firstname']");
        this.lastNameField = this.page.locator("[name='lastname']");
        this.emailField = this.page.locator("[name='email']");
        this.phoneField = this.page.locator("[name='phone']");
        this.jobTitleField = this.page.locator("[name='jobtitle']");
        this.messageField = this.page.locator("[name='message']");
        this.countryDDB = this.page.locator("select[name='country']");
        this.bookADemoBTN = this.page.locator(".hs-button.primary");
        this.frameCalander = this.page.frameLocator(".chilipiper-popup-window .chilipiper-frame");
        this.calanderHeader = this.frameCalander.locator("[data-id='calendar-availability-header']");
        this.closeCalanderBtn = this.frameCalander.locator("[alt='Close page button']");
        this.thankYouMessage = this.page.locator(".hbspt-form")
        this.missingFirstNameError = this.page.locator(".hs_firstname .hs-error-msg");
        this.missingLastNameError = this.page.locator(".hs_lastname .hs-error-msg");
        this.missingEmailError = this.page.locator(".hs_email .hs-error-msg");
        this.missingJobTitleError = this.page.locator(".hs_jobtitle .hs-error-msg");
        this.missingPhoneError = this.page.locator(".hs_phone .hs-error-msg");
        this.missingCountryError = this.page.locator(".hs_country .hs-error-msg");
    }


    public async fillInFirstName(firstName: string)
    {
        await this.fillText(this.firstNameField, firstName);        
    }

    public async getFirstNameText(): Promise<string>
    {
        try{
            const name = await this.firstNameField.inputValue();
       // const name = await this.firstNameField.getAttribute("value")
        return name?.trim() ?? "";
        }
        catch (error){
            console.log("unable to extract first name from field", error)
            return "";
        }
    }

    public async fillInLastName(lastName: string)
    {
        await this.fillText(this.lastNameField, lastName);
    }

    public async getLastNameText(): Promise<string>
    {
        try{
        const name = await this.lastNameField.getAttribute("value")
        return name?.trim() ?? "";
        }
        catch (error){
            console.log("unable to extract last name from field", error)
            return "";
        }
    }

    public async fillInEmail(email: string)
    {
        await this.fillText(this.emailField, email)
    }

    public async getEmailText(): Promise<string>
    {
        try{
        const name = await this.emailField.getAttribute("value")
        return name?.trim() ?? "";
        }
        catch (error){
            console.log("unable to extract email from field", error)
            return "";
        }
    }

    public async fillInPhone(phone: string)
    {
        await this.fillText(this.phoneField, phone)
    }

    public async getPhoneText(): Promise<string>
    {
        try{
        const name = await this.phoneField.getAttribute("value")
        return name?.trim() ?? "";
        }
        catch (error){
            console.log("unable to extract phone number from field", error)
            return "";
        }
    }

    public async fillInJobTitle(jobTitle: string)
    {
        await this.fillText(this.jobTitleField, jobTitle)
    }

    public async getJobTitleText(): Promise<string>
    {
        try{
        const name = await this.jobTitleField.getAttribute("value")
        return name?.trim() ?? "";
        }
        catch (error){
            console.log("unable to extract job title from field", error)
            return "";
        }
    }

    public async fillInMessage(message: string)
    {
        await this.fillText(this.messageField, message)
    }

    public async getMessageText(): Promise<string>
    {
        try{
        const name = await this.messageField.getAttribute("value")
        return name?.trim() ?? "";
        }
        catch (error){
            console.log("unable to extract message text from field", error)
            return "";
        }
    }

    public async selectCountry(countryValue: string)
    {
        try{
            var normalizeStrint = this.titleCase(countryValue);
            await this.page.selectOption("[name='country']", countryValue);
            this.countryDDB.selectOption(countryValue);
        }
        catch (error) {
            console.error(`Failed to select country: ${countryValue}`, error);
            throw error;
          }
    }

    public async getSelectedCountry():Promise<string>
    {
       
            const selectedCountry = await this.countryDDB.inputValue();
            console.log(`Selected country value: ${selectedCountry}`);
            return selectedCountry;
    }

   


    public async clickOnBookADemo()
    {
        await this.clickElement(this.bookADemoBTN);
    }

    public async verifyCalanderOpen(): Promise<boolean>
    {
        try{
            await this.calanderHeader.waitFor({state: 'visible', timeout: 10000});
            return await this.calanderHeader.isVisible();
        }
        catch (error){
            console.log("calander header is not visible", error);
            return false;
        }
    }
    
    public async getMissingFirstNameError(): Promise<string>
    {
        try{
            const error = await this.missingFirstNameError;
            const count = await error.count();
            if (count > 0){
                await error.first().waitFor({state: 'visible', timeout: 2000});
                const errorText = await error.textContent();
                console.log(`first name field validation error, message: ${errorText}`)
                return errorText?.trim() ?? "";
            }
            else{
                console.log(`no validation error for first name field`)
                return "";
            }
            
            }
            catch (error){
                console.log("unable to extract message text from field", error)
                return "";
            }
    }

    public async getMissingLastNameError(): Promise<string>
    {
        try{
            const error = await this.missingLastNameError;
            const count = await error.count();
            if (count > 0){
                await error.first().waitFor({state: 'visible', timeout: 2000});
                const errorText = await error.textContent();
                console.log(`last name field validation error, message: ${errorText}`)
                return errorText?.trim() ?? "";
            }
            else{
                console.log(`no validation error for last name field`)
                return "";
            }
            
            }
            catch (error){
                console.log("unable to extract message text from field", error)
                return "";
            }
    }

    public async getMissingEmailError(): Promise<string>
    {
        try{
            const error = await this.missingEmailError;
            const count = await error.count();
            if (count > 0){
                await error.first().waitFor({state: 'visible', timeout: 2000});
                const errorText = await error.textContent();
                console.log(`email field validation error, message: ${errorText}`)
                return errorText?.trim() ?? "";
            }
            else{
                console.log(`no validation error for email field`)
                return "";
            }
            
            }
            catch (error){
                console.log("unable to extract message text from field", error)
                return "";
            }
    }

    public async getMissingJobTitleError(): Promise<string>
    {
        try{
            const error = await this.missingJobTitleError;
            const count = await error.count();
            if (count > 0){
                await error.first().waitFor({state: 'visible', timeout: 2000});
                const errorText = await error.textContent();
                console.log(`job title field validation error, message: ${errorText}`)
                return errorText?.trim() ?? "";
            }
            else{
                console.log(`no validation error for job title field`)
                return "";
            }
            
            }
            catch (error){
                console.log("unable to extract message text from field", error)
                return "";
            }
    }

    public async getMissingPhoneError(): Promise<string>
    {
        try{
            const error = await this.missingPhoneError;
            const count = await error.count();
            if (count > 0){
                await error.first().waitFor({state: 'visible', timeout: 2000});
                const errorText = await error.textContent();
                console.log(`phone number field validation error, message: ${errorText}`)
                return errorText?.trim() ?? "";
            }
            else{
                console.log(`no validation error for phone number field`)
                return "";
            }
            
            }
            catch (error){
                console.log("unable to extract message text from field", error)
                return "";
            }
    }

    public async getMissingCountryError(): Promise<string>
    {
        try{
            const error = await this.missingCountryError;
            const count = await error.count();
            if (count > 0){
                await error.first().waitFor({state: 'visible', timeout: 2000});
                const errorText = await error.textContent();
                console.log(`country validation error, message: ${errorText}`)
                return errorText?.trim() ?? "";
            }
            else{
                console.log(`no validation error for country`)
                return "";
            }
            
            }
            catch (error){
                console.log("unable to extract message text from field", error)
                return "";
            }
    }

    public async getFormValues(): Promise<Record<string, string>> {
        const values = {
            firstName: await this.getFirstNameText(),
            lastName: await this.getLastNameText(),
            email: await this.getEmailText(),
            phone: await this.getPhoneText(),
            jobTitle: await this.getJobTitleText(),
            country: await this.getSelectedCountry(),
            message: await this.getMessageText(),
        };
        console.log("Form values:", values);
        return values;
    }


}