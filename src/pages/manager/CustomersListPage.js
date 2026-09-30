import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.rows = page.locator('tbody tr');
    this.lastRow = this.rows.last();
    this.lastRowFirstNameCell = this.lastRow.getByRole('cell').nth(0);
    this.lastRowLastNameCell = this.lastRow.getByRole('cell').nth(1);
    this.lastRowPostCodeCell = this.lastRow.getByRole('cell').nth(2);
    this.lastRowAccountNumberCell = this.lastRow.getByRole('cell').nth(3);
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async assertLastRowFirstNameContainsText(text) {
    await expect(this.lastRowFirstNameCell).toContainText(text);
  }

  async assertLastRowLastNameContainsText(text) {
    await expect(this.lastRowLastNameCell).toContainText(text);
  }

  async assertLastRowPostCodeContainsText(text) {
    await expect(this.lastRowPostCodeCell).toContainText(text);
  }

  async assertLastRowAccountNumberIsEmpty() {
    await expect(this.lastRowAccountNumberCell).toHaveText('');
  }

  async assertLastRowAccountNumberIsNotEmpty() {
    await expect(this.lastRowAccountNumberCell).toHaveText(/\d+/);
  }
}
