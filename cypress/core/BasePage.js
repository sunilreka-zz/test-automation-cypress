/// <reference types="cypress" />
require('cypress-xpath');
import cyConfig from './../../cypress.json'

export default class BasePage {

    /* Method to verify title for all pages */
    VerifyPageTitle(pageTitle) {
        //expect(cy.pageTitle).include(pageTitle);
        console.log('Page title : ' + cy.pageTitle);
    }

    /* Method to Find elements on UI and waits for DefaultTimeOut if not exists */
    EM_GetElement(eleSelector) {
        let ele = null;
        if (eleSelector.includes('//')) {
            ele = cy.xpath(eleSelector, { timeout: cyConfig.defaultTimeOut })
            .should('be.visible');
        } else {
            ele = cy.get(eleSelector, { timeout: cyConfig.defaultTimeOut })
            .should('be.visible');
        }
        return ele;
    }

    /* Method to enter text */
    EM_EnterText(selector, testData, delayWait) {
        delayWait = delayWait || 10;
        let ele = this.EM_GetElement(selector);
        ele.clear();
        ele.type(testData, { delay: delayWait });
    }

    /* Method to click on button */
    EM_ClickButton(selector, delayWait) {
        delayWait = delayWait || 10;
        //this.EM_GetElement(selector).click({ delay: delayWait });
        this.EM_GetElement(selector).click();
    }
}