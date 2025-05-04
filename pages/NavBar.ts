import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage.js";

export class NavBar extends BasePage{

    private navBar: Locator;
    private solutions: Locator;
    private solutionsMenu: Locator;
    private solutionCallCenter: Locator;
    private solutionSelfService: Locator;
    private solutionOnboardingTraining: Locator;
    private solutionFieldService: Locator;
    private integrations: Locator;
    private resources: Locator;
    private resourcesMenu: Locator;
    private resourcesBlog: Locator;
    private resourcesVideos: Locator;
    private resourcesEvents: Locator;
    private resourcesNews: Locator;
    private resourcesGuides: Locator;
    private resourcesWebinars: Locator;
    private resourcesReports: Locator;
    private resourcesROICalc: Locator;
    private caseStudies: Locator;
    private about: Locator;
    private aboutAboutUs: Locator;
    private aboutCareers: Locator;
    private aboutLHUniversity: Locator;
    private aboutContactUs: Locator;
    private bookADemo: Locator;
    private kmsLogo: Locator;

    constructor(page: Page) {
        super(page);
        this.navBar = this.page.locator(".header_panel__menu .header_panel__nav-list>.header_panel__nav-list-item");
        this.solutions = this.navBar.nth(0);
        this.solutionsMenu = this.solutions.locator(".header_panel__nav-dropdown-list-item");
        this.solutionCallCenter = this.solutionsMenu.nth(0);
        this.solutionSelfService = this.solutionsMenu.nth(1);
        this.solutionOnboardingTraining = this.solutionsMenu.nth(2);
        this.solutionFieldService = this.solutionsMenu.nth(3);
        this.integrations = this.navBar.nth(1);
        this.resources = this.navBar.nth(2);
        this.resourcesMenu = this.resources.locator(".header_panel__nav-dropdown-list-item")
        this.resourcesNews = this.resourcesMenu.nth(3);
        this.resourcesBlog = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(0);
        this.resourcesVideos = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(1);
        this.resourcesEvents = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(2);
        //this.resourcesNews = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(3);
        this.resourcesGuides = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(4);
        this.resourcesWebinars = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(5);
        this.resourcesReports = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(6);
        this.resourcesROICalc = this.resources.locator(".header_panel__nav-dropdown-list-item").nth(7);
        this.caseStudies = this.navBar.nth(3);
        this.about = this.navBar.nth(4);
        this.aboutAboutUs = this.about.locator(".header_panel__nav-dropdown-list-item").nth(0);
        this.aboutCareers = this.about.locator(".header_panel__nav-dropdown-list-item").nth(1);
        this.aboutContactUs = this.about.locator(".header_panel__nav-dropdown-list-item").nth(2);
        this.aboutLHUniversity = this.about.locator(".header_panel__nav-dropdown-list-item").nth(3);
        this.bookADemo = this.page.locator(".header_panel__menu .header_panel__actions");
        this.kmsLogo = this.page.locator(".header_panel .header_panel__logo");
    }

    public async clickKMSLogo()
    {
        await this.clickElement(this.kmsLogo);
    }

    public async hoverOurSolutions()
    {
      await this.hoverElement(this.solutions, this.solutionCallCenter)
    }

    public async clickSolutionsCallCenter()
    {
        try{
            await this.solutionCallCenter.waitFor({state: 'visible', timeout: 3000});
            await this.clickElement(this.solutionCallCenter);
        }
        catch (error){
            console.log("solutions call center is not clicked", error)
        }
        
    }

    public async clickSolutionsSelfService()
    {
        await this.clickElement(this.solutionSelfService);
    }

    public async clickSolutionOnboardingTraining()
    {
        await this.clickElement(this.solutionOnboardingTraining);
    }

    public async clickIntegrations()
    {
        await this.clickElement(this.integrations);
    }

    public async hoverResources()
    {
        await this.hoverElement(this.resources, this.resourcesBlog);
    }

    public async clickResourcesBlog()
    {
        await this.clickElement(this.resourcesBlog);
    }

    public async clickResourcesEvents()
    {
        await this.clickElement(this.resourcesEvents);
    }

    public async clickResourcesGuides()
    {
        await this.clickElement(this.resourcesGuides);
    }

    public async clickResourcesNews()
    {
        await this.clickElement(this.resourcesNews);
    }

    public async clickResourcesROICalc()
    {
        await this.clickElement(this.resourcesROICalc);
    }

    public async clickResourcesReports()
    {
        await this.clickElement(this.resourcesReports);
    }

    public async clickResourcesVideos()
    {
        await this.clickElement(this.resourcesVideos);
    }

    public async clickResourcesWebinars()
    {
        await this.clickElement(this.resourcesWebinars);
    }

    public async clickCaseStudies()
    {
        await this.clickElement(this.caseStudies);
    }

    public async hoverAbout()
    {
        await this.hoverElement(this.about, this.aboutAboutUs)
    }

    public async clickAboutAboutUs()
    {
        await this.clickElement(this.aboutAboutUs);
    }

    public async clickAboutCareers()
    {
        await this.clickElement(this.aboutCareers);
    }

    public async clickLHUniversity()
    {
        await this.clickElement(this.aboutLHUniversity);
    }

    public async clickContactUs()
    {
        await this.clickElement(this.aboutContactUs);
    }

    public async clickBookADemo()
    {
        await this.clickElement(this.bookADemo);
    }

    
    



    
}