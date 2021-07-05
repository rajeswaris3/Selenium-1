'use strict';

module.exports = {
    '@tags' : ['selenium','main'],
    'Demo test selenium-test1.dev'(browser) {
      
       const page = browser.page.navigateToPage(); 
       const mainPageTitle = 'SeleniumHQ Browser Automation';
       const downloadButtonSelector = 'Downloads';
      //  const downloadButtonSelector1 = '.nav-item[text="Downloads"]';
       const downloadPageUrl = 'https://www.selenium.dev/downloads/';

       //navigate to url from POM
       page
          .navigate()          

       browser
        // .url('https://www.selenium.dev/')
        .waitForElementVisible('body')      
        .assert.titleContains(mainPageTitle, 'Main title selenium browser automation')
        
        page.clickLinkSelector(downloadButtonSelector,downloadPageUrl)

        //navigate to download page and verify downloads url
        // .assert.visible(downloadButtonSelector1)        
        // .click('link text',downloadButtonSelector)
        
        // .assert.urlEquals(downloadPageUrl)
        // .saveScreenshot('tests_output/google.png')       
      
      }
    }
  