import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  expect: {
    // toMatchSnapshot: {_comparator: 'ssim-cie94'} as any,
  },
  testDir: './tests',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
