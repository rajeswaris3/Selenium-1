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
    //    var searchSuggestion  = 'Grid 3';               

       //navigate to url from POM
       page
          .navigate()          

       browser
        // .url('https://www.selenium.dev/')
        .waitForElementVisible('body')      
        
        //navigate to download page and verify downloads url
        .click('link text',documentationButtonSelector)
        .assert.urlEquals(documentationPageUrl)
        .saveScreenshot('tests_output/document.png')   
        
        //search Grid and select second value 
        .waitForElementVisible(headerWrapper)        
        .setValue(inputSearchBox,searchText)   
        
        // searchSuggestion = browser.useXpath().getAttribute(autoCompleteSecondResultXpath,'data-title') 
        var searchSuggestion=browser.useXpath().getAttribute(autoCompleteSecondResultXpath,'data-title', function(result) {
            console.log('result', result)
            return result.value
        })
        

      browser
        .useXpath().click(autoCompleteSecondResultXpath)
        .useCss()
        .waitForElementVisible('body') 
        .assert.containsText('body',searchSuggestion) 
      }


}