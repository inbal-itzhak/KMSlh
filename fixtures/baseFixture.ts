import { test as base, expect, Page } from '@playwright/test';
import { NavBar } from '@pages/NavBar';
import { BookADemo } from '@pages/BookADemo';
import { AccessibilityWidget } from '@pages/AccessibilityWidget';


type Fixtures = {
  page:Page
  navBar: NavBar;
  bookADemo: BookADemo
  accessibility: AccessibilityWidget
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    await page.goto('https://kmslh.com/');  
    await use(page);  
  },
  
  navBar: async ({ page }, use) => {
    const navBar = new NavBar(page);  
    await use(navBar); 
  },

  bookADemo: async ({ page }, use) => {
    const bookADemo = new BookADemo(page);  
    await use(bookADemo); 
  },

  accessibility: async({page}, use) => {
    const accessibility = new AccessibilityWidget(page);
    await use(accessibility);
  }
});

export { expect };