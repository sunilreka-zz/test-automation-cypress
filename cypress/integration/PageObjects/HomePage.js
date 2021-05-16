import BasePage from "../../core/BasePage";
const basepage = new BasePage();

export default class HomePage  {
    
    HomePage() {
        basepage.VerifyPageTitle('JustFly')
    }

    _ByFromLoc = '//input[@name="seg0_from"]';

    _ByClickFirstEleInTheList = 'ul#airports-auto-complete-menu li:first';

    _ByToLoc = '//input[@name="seg0_to"]';

    _ByFromDate = '//input[@name="seg0_date"]';

    _BySelectFromDate = '//div[contains(@class, "ui-datepicker-group-first")]//tbody//td[contains(@class, "ui-datepicker-today")]/a'

    _ByToDate = '//input[@name="seg1_date"]';

    _BySelectToDate = '//div[text()="<%MM%> <%YYYY%>"]/ancestor::div[contains(@class, "ui-datepicker-group-last")]//a[text()="<%DD%>"]';

    _BySubmit = 'div.form-field-button';

    /* Method to Find elements on UI and waits for DefaultTimeOut if not exists */
    EnterLocations(FromLoc, ToLoc, delayWait)
    {
        delayWait = delayWait || 1000;
        //Enter From Location
        basepage.EM_EnterText(this._ByFromLoc, FromLoc, delayWait);

        //Select first element in the smart search list
        basepage.EM_ClickButton(this._ByClickFirstEleInTheList);

        //Enter To Location
        basepage.EM_EnterText(this._ByToLoc, ToLoc, delayWait);

        //Select first element in the smart search list
        basepage.EM_ClickButton(this._ByClickFirstEleInTheList);
    }

    SelectFromDate(dd, delayWait) {
        //Click on DatePicker
        basepage.EM_ClickButton(this._ByFromDate, delayWait);

        //Select today's date
        basepage.EM_ClickButton(this._BySelectFromDate);
    }

    SelectToDate(dd, mm, yyyy) {
        //Select today's date
        let _xpath = this._BySelectToDate.replace('<%DD%>', dd)
        .replace('<%MM%>', mm).replace('<%YYYY%>', yyyy);
        basepage.EM_ClickButton(_xpath);
    }

    ClickOnSearch() {
        cy.get(this._BySubmit).click();
    }
}