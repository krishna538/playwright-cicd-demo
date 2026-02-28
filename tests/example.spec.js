import { test, expect } from '@playwright/test';

test('homepage has correct text', async ({ page }) => {
  await page.goto('/'); // baseURL is used here
  await expect(page.locator('body')).toContainText('Hello from playwright CI/CD demo!');
});
