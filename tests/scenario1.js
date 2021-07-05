'use strict';

module.exports = {
    '@tags' : ['selenium','main'],
    'Demo test selenium-test1.dev'(browser) {
      
       const page = browser.page.navigateToPage(); 
       const mainPageTitle = 'SeleniumHQ Browser Automation';
       const downloadButtonSelector = 'Downloads';      
       const downloadPageUrl = 'https://www.selenium.dev/downloads/';

       //navigate to url from POM
       page
          .navigate()          

       browser
        // .url('https://www.selenium.dev/')
        .waitForElementVisible('body')      
        .assert.titleContains(mainPageTitle, 'Main title selenium browser automation')
        
        //navigate to download page and verify downloads url
        page.clickLinkAssert(downloadButtonSelector,downloadPageUrl,"Navigation to Downloads page successful")
        // .saveScreenshot('tests_output/google.png')       
      
      }
    }
  