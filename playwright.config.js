// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.

/**
 * @see https://playwright.dev/docs/test-configuration
 */

//export default defineConfig({
const config = ({
  testDir: './tests',

  reporter:'html',
 
  use: {
  
browserName:'chromium',
screenshot:'on',
trace:'on'

//browserName:'firefox'  
//browserName:'webkit' for safari

//headless:false  this will tell to open browser

  },

  
});

module.exports=config