import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const require = createRequire(path.join(repoRoot, 'package.json'));
const { chromium, expect } = require('@playwright/test');
const baseURL = process.argv[2] ?? 'https://minimax-h31.zw83716.workers.dev';
const browser = await chromium.launch({
  channel: 'chrome', headless: true,
  ...(process.env.MINIMAX_TEST_PROXY ? { proxy: { server: process.env.MINIMAX_TEST_PROXY } } : {}),
});
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const route of ['/', '/minimax-h3.1-comfyui', '/minimax-h3.1-max', '/minimax-h3.1-pricing', '/minimax-h3.1-release-date']) {
    const response = await page.goto(new URL(route, baseURL).href);
    assert.equal(response.status(), 200, route);
    await expect(page.locator('h1')).toBeVisible();
    assert.equal(await page.getByText('Last updated:', { exact: false }).count() > 0, route.endsWith('release-date'));
    await expect(page.locator('footer')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Official H3 docs' })).toHaveCount(0);
    console.log(`Page verified: ${route}`);
  }
  await page.goto(baseURL);
  await page.getByRole('link', { name: 'Use this prompt', exact: true }).first().click();
  await expect(page.locator('#h3-prompt')).toHaveValue(/ceramic vase/);
  await page.locator('#h3-ratio').click();
  await page.getByRole('option', { name: '9:16', exact: true }).click();
  await expect(page.locator('#h3-ratio')).toContainText('9:16');
  await page.getByRole('button', { name: 'Generate video', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('No request was sent');
  await page.getByRole('navigation').getByRole('link', { name: 'ComfyUI', exact: true }).click();
  await expect(page.locator('h1')).toContainText('ComfyUI');
  await page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true }).click();
  await expect(page.locator('#h3-prompt')).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'Mobile horizontal overflow');
  assert.deepEqual(errors, [], 'Browser runtime errors');
  await page.screenshot({ path: path.join(repoRoot, '.tmp/minimax-h31-live.png') });
  console.log('Live browser checks passed: examples, settings, form, navigation, mobile layout.');
} finally {
  await browser.close();
}
