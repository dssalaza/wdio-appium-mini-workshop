describe('App Test', () => {
    it.skip('Should login successfully', async () => {
        // Navigate to the login screen
        await $('~Login').click();
        await $('~Login-screen').waitForDisplayed(true);

        // Enter credentials
        await $('~input-email').setValue('test@webdriver.io');
        await $('~input-password').setValue('Test1234!');

        // Click on the login button
        await $('~button-LOGIN').click();

    });

});

describe('Should show a native alert when login is successfull', () => {

    // XPath selector
    const ANDROID_ALERT_TITLE = '*//android.widget.TextView[@resource-id="android:id/alertTitle"]'

    // IOS Predicate String selector it uses XCUITest
    const IOS_ALERT = '-ios predicate string:type == \'XCUIElementTypeAlert\''

    it('Should login successfully and accept the native alert', async () => {

        // Navigate to the login screen
        await $('~Login').click();
        await $('~Login-screen').waitForDisplayed();

        // Enter credentials
        await $('~input-email').setValue('test@webdriver.io');
        await $('~input-password').setValue('Test1234!');

        // Click on the login button
        await $('~button-LOGIN').click();

        // Wait for the native alert to appear using the driver object
        if (await driver.isIOS) {
            expect(await $(IOS_ALERT).waitForDisplayed()).toBe(true);
        } else {
            expect(await $(ANDROID_ALERT_TITLE).waitForDisplayed()).toBe(true);
        }    

    });
});