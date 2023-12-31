import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const DEVICE_OVERRIDES = {
  viewport: {
    width: 1500,
    height: 1000,
  },
  deviceScaleFactor: 2,
};

export default defineConfig({
  testDir: "./playwright",

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  retries: 0,

  workers: 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://127.0.0.1:5173/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        ...DEVICE_OVERRIDES,
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        ...DEVICE_OVERRIDES,
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        ...DEVICE_OVERRIDES,
      },
    },
  ],
});
