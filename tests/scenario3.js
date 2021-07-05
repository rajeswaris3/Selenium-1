'use strict';

module.exports = {
    '@tags' : ['selenium','search'],
    'Demo test selenium-test3.dev'(browser) {
      
       const page = browser.page.navigateToPage();        
       const documentationButtonSelector = 'Documentation';
       const documentationPageUrl = 'https://www.selenium.dev/documentation/en/';

       const headerWrapper = '#header-wrapper';
       const inputSearchBox = '#search-by';
       const searchText = 'Grid';    
       const autoCompleteSecondResultXpath = '//div[@class="autocomplete-suggestions "]/div[2]';                 

       //navigate to url from POM
       page
          .navigate()          

       browser
        // .url('https://www.selenium.dev/')
        .waitForElementVisible('body')      
        
        //navigate to download page and verify downloads url
        page.clickLinkAssert(documentationButtonSelector,documentationPageUrl)
        // .click('link text',documentationButtonSelector)
        // .assert.urlEquals(documentationPageUrl)
        .saveScreenshot('tests_output/document.png')   
        
        //search Grid for a predefined value
        .waitForElementVisible(headerWrapper)        
        .setValue(inputSearchBox,searchText)   
        
        //Select auto complete suggestion by index and retrieve the selected text ,and verify the result on the navigated page
        browser.useXpath().getAttribute(autoCompleteSecondResultXpath,'data-title', function(result) {
            console.log('result', result)            
            if(result.value)
            {
                browser
                .useXpath().click(autoCompleteSecondResultXpath)
                .useCss()
                .waitForElementVisible('body') 
                .saveScreenshot('tests_output/search.png')
                .assert.containsText('body',result.value, "Selected text found in new page") 
            }
        })
      }


}