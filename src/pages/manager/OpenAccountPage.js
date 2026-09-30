import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.currencyDropDown = page.getByTestId('currency');
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/openAccount',
    );
  }

  async selectCurrency(currencyName){
    await this.currencyDropDown.selectOption(currencyName);
  }

  async assertCurrencyDropDownHasValue(value) {
    await expect(this.currencyDropDown).toHaveValue(value);
  }
}
