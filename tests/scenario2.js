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
        //navigate to About - governanace using drop down menu
        .click(aboutArrowDropdown)
        // waitForElementVisible('#aboutSubnav')  

        page.clickLinkAssert(aboutGovernance,governanceUrl,"Navigation to Governance page successful")

        browser
        .saveScreenshot('tests_output/governance.png')    

        //scroll to the container
        .getLocationInView(supportContainer)
        .assert.visible(supportContainer)          
  
        page.clickLinkAssert(learnmoreButton,sponsorsUrl,"Navigation to Sponsors page successful")
        .saveScreenshot('tests_output/sponsor.png')   

    }
}