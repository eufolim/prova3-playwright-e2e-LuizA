import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class TerrasavrElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFileInput(): Locator {
    return this.page.locator('#load-input');
  }

  getFileSave(): Locator {
    return this.page.locator('#save-button');
  }

  getStatName(): Locator {
    return this.page.locator('#stat-name');
  }

  getHotbarSlot(n: number): Locator {
    return this.page.locator('#inventory').locator('.hotbar').nth(n);
  }

  getTippy(): Locator {
    return this.page
      .locator('.tippy-content')
      .locator('.slot-actions')
      .locator('text=Add');
  }

  getContextMenu(): Locator {
    return this.page.locator('#edit-item').locator('#edit-item-id');
  }

  getContextMenuApply(): Locator {
    return this.page.locator('#edit-item').locator('.apply');
  }

  getPermBuff(): Locator {
    return this.page.locator('#perm-bonuses-div').getByRole('checkbox').first();
  }
}
