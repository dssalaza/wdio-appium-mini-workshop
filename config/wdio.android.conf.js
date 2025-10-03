import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = {
    runner: 'local',
    specs: [
        '../test/specs/*.e2e.js'
    ],
    exclude: [],
    maxInstances: 1,
    maxInstancesPerCapability: 1,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            isHybridApp: true,
            command: 'appium',
            port: 4736,
            args: {
                relaxedSecurity: true
            }
        }]
    ],
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
        'appium:noReset': false,
        'appium:fullReset': true,
        'appium:dontStopAppOnReset': true,
        'appium:newCommandTimeout': 240
    }],
}; 