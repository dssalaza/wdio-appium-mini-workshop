describe('Swipe test: ', () => {

    it('Should be able to swipe vertical by finding the surprise', async () => {

        const SwipeScreen = $('~Swipe-screen');
        const WDIOLogo = $('~WebdriverIO logo');
        const SwipeTab = $('~Swipe');

        // Wait for the Swipe tab to be displayed
        await SwipeTab.waitForDisplayed(true);
        await SwipeTab.click();
        await SwipeScreen.waitForDisplayed(true);

        // Scroll up to find the WDIOLogo
        await WDIOLogo.scrollIntoView({
            scrollableElement: await SwipeScreen,
            direction: 'up',
            maxScrolls: 5,
            percent: 0.99,
        });

        // Wait for the WDIOLogo to be displayed
        await expect(WDIOLogo).toBeDisplayed();
    });
});