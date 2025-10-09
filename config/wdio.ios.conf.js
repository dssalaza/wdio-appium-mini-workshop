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
    port: 4726,
    services: [
        ['appium', {
            isHybridApp: true,
            command: 'appium',
            args: {
                port: 4726,
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
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 17',
        'appium:platformVersion': '26.0',
        'appium:app': path.resolve(__dirname, '../apps/ios-app.app'),
        'appium:noReset': false,
        'appium:newCommandTimeout': 240
    }],
}; 