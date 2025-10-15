import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
    specs: [
        '../tests/specs/*.e2e.js'
    ],
    maxInstances: 1,
    maxInstancesPerCapability: 1,
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    port: 4725,
    services: [
        ['appium', {
            isHybridApp: true,
            command: 'appium',
            args: {
                port: 4725,
                relaxedSecurity: true
            }
        }]
    ],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: true,
    }]],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 65 * 1000
    },
    // iOS specific capabilities
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve(__dirname, '../apps/android-app.apk'),
        'appium:newCommandTimeout': 240
    }],
}; 