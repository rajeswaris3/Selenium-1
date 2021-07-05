'use strict';

module.exports = {

    '@tags' : ['selenium','dropdown'],
    'Demo test selenium-test2.dev'(browser) {

        const page = browser.page.navigateToPage(); 
        const aboutArrowDropdown = '#aboutArrow';
        const aboutGovernance = 'Governance';
        const supportContainer = '.support-selenium'
        const learnmoreButton = 'LEARN MORE';
        const governanceUrl = 'https://www.selenium.dev/project/';
        const sponsorsUrl = 'https://www.selenium.dev/sponsors/';

        page.navigate()

        browser
        .waitForElementVisible('body') 
        //navigate to About - governanace
        .click(aboutArrowDropdown)
        // waitForElementVisible('#aboutSubnav')  
        .click('link text',aboutGovernance)
        .assert.urlEquals(governanceUrl,'Navigated to Governance URL')
        .saveScreenshot('tests_output/governance.png')    

        //learnmore navigation
        // .moveToElement(learnmoreButton,10,10)
        .getLocationInView(supportContainer)
        .assert.visible(supportContainer)
        .saveScreenshot('tests_output/support.png')   
        .click('link text',learnmoreButton)
        .assert.urlEquals(sponsorsUrl,'Navigated to Sponsors URL')
        .saveScreenshot('tests_output/sponsor.png')   

    }
}