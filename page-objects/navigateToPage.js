module.exports= {
    url: 'https://www.selenium.dev/',

    elements: {     

        downloadButtonSelector  : 'Downloads'        
    },

    commands:[{

        clickLinkAssert(selector,linkUrl,disMessage){
            
            this.click('link text',selector);
            this.assert.urlEquals(linkUrl, disMessage)
            return this;
        },  

        getAttributeString(selector,attValue) {
            this.useXpath().getAttribute(selector, attValue, function(result) {
                console.log('result', result)   
            })

        }               
            

    }]
}