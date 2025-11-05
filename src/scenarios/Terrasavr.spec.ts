import { test } from '@playwright/test';
import TerrasavrPage from '../support/pages/TarrasavrPage';
import { ai } from '@zerostep/playwright';

test.describe('tests no Terrasavr', () => {
  let terrasavrPage: TerrasavrPage;
  test.beforeEach(async ({ page }) => {
    terrasavrPage = new TerrasavrPage(page);
    await page.goto('https://yal.cc/r/terrasavr/plus/');
  });

  test('alterar nome do jogador', async () => {
    await terrasavrPage.EnviarPlayer('src/support/players_unedited/test1.plr');
    await terrasavrPage.AlterarNome('Teste Editado');
    await terrasavrPage.SavarPlayer();
  });

  test('ia', async ({ page }) => {
    await page.goto('https://yal.cc/r/terrasavr/plus/');
    await terrasavrPage.EnviarPlayer('src/support/players_unedited/test1.plr');
    const aiArgs = { page, test };
    await ai('change the player name to "ZeroStep"', aiArgs);
    await terrasavrPage.SavarPlayer();
  });

  test('adicionar poção no inventario', async () => {
    await terrasavrPage.EnviarPlayer('src/support/players_unedited/test1.plr');
    await terrasavrPage.EnableExpert();
    await terrasavrPage.SavarPlayer();
  });
});
