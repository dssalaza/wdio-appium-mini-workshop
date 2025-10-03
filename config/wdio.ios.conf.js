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
            port: 4735,
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
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 16 Pro Max',
        'appium:platformVersion': '18.3',
        'appium:app': path.resolve(__dirname, '../apps/ios-app.app'),
        'appium:noReset': false,
        'appium:newCommandTimeout': 240
    }],
}; 