/// <reference types="cypress" />
require('cypress-xpath');
import cyConfig from './../../../cypress.json'
import BasePage from '../../core/BasePage';
import HomePage from '../PageObjects/HomePage';

//#region
const homepage = new HomePage();
//#endregion

describe('Just Fly : Flight search', () => {
    it('Search for a flight', () => {
        cy.visit('https://www.justfly.com/', { timeout: cyConfig.defaultTimeOut });
        
        //Enter From and To location
        homepage.EnterLocations('HYD', 'CDG');

        //Select From Date
        homepage.SelectFromDate();

        //Select To Date - DD
        homepage.SelectToDate('30', 'June', '2021');

        //Click on Search button
        homepage.ClickOnSearch();
    })

    it('Dynamic Date', () => {
        debugger;
        var dt = new Date();
        var dd = dt.getDate();
        var monthname = dt.toLocaleString('default', { month: 'long' });
        var yyyy = dt.getFullYear();

        var calTitle = monthname + ' ' + yyyy;
        var dt1 = new Date(2021, 8, 30);
    })
})