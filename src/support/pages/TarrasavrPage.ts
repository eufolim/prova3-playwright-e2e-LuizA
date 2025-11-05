import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import TerrasavrElements from '../elements/TerrasavrElements';
import BasePage from './BasePage';

export default class TerrasavrPage extends BasePage {
  readonly terrasavrElements: TerrasavrElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.terrasavrElements = new TerrasavrElements(page);
  }

  async EnviarPlayer(file: string): Promise<void> {
    this.terrasavrElements.getFileInput().setInputFiles(file);
  }

  async SavarPlayer(): Promise<void> {
    this.terrasavrElements.getFileSave().click();
  }

  async AlterarNome(nome: string): Promise<void> {
    this.terrasavrElements.getStatName().clear();
    this.terrasavrElements.getStatName().fill(nome);
  }

  async SelecionarSlot(n: number): Promise<void> {
    this.terrasavrElements.getHotbarSlot(n).click({ button: 'right' });
  }

  async InteragirTippy(): Promise<void> {
    this.terrasavrElements.getTippy().click();
  }

  async ChangeItemId(id: string): Promise<void> {
    this.terrasavrElements.getContextMenu().clear();
    this.terrasavrElements.getContextMenu().fill(id);
  }

  async ApplyChanges(): Promise<void> {
    this.terrasavrElements.getContextMenuApply().click();
  }

  async EnableExpert(): Promise<void> {
    this.terrasavrElements.getPermBuff().check();
  }
}
