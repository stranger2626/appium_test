describe('Onliner search', function() {
    browser.ignoreSynchronization=true;
    var EC=protractor.ExpectedConditions;
    
    it('title', function() {
      browser.get('https://www.onliner.by/');
        browser.getTitle().then(function(title){
          expect(title).toBe('Onliner.by');
          
        });
    });

    it('search', function() {
        element(by.name('query')).sendKeys(" ");
        browser.switchTo().frame(element(by.css('.modal-iframe')).getWebElement());     
        browser.wait(EC.visibilityOf($('.search__input')),15000);
        browser.findElement(by.css('.search__input')).sendKeys("iphone 6s 16gb Silver");
        browser.wait(EC.visibilityOf($('.search__result')),20000);
        element(by.linkText('Apple iPhone 6s 16GB Silver')).click();
        
        browser.wait(EC.visibilityOf($('.g-bottom')),15000);
    });

    it ('iphone',function(){
        browser.findElement(by.css('.product-specs__table'));
        var cpu=element.all(by.css('.value__text')).getText()
          .then(function(cpu){
              expect(cpu[8]).toEqual("12 Мп");
              expect(cpu[9]).toEqual("Apple A9");
              expect(cpu[15]).toEqual("138.3 мм");
          });
          
    });
        
    it("fmModule", function(){
       browser.wait(EC.visibilityOf($('.product-main')), 20000); 
        browser.findElement(by.css('tbody:nth-last-child(6) > tr:nth-child(3) > td:last-child > span'))
    .getAttribute('class')
    .then(function(fmModule){
      expect(fmModule).toEqual( "i-x");
    })
    .then(function(){
      console.log("+Test: FM-приёмника нет");}
      ,function (err) {
          console.error(err.message);
          });
        });

    it("finge-print", function(){
       browser.wait(EC.visibilityOf($('.product-main')), 20000); 
        browser.findElement(by.css('tbody:nth-child(5) > tr:nth-child(12) > td:last-child > span'))
    .getAttribute('class')
    .then(function(fingerPrint){
    expect(fmModule).toEqual( "i-tip");
    })
    .then(function(){
      console.log("+Test: Сканер отпечатка пальца есть");}
      ,function (err) {
          console.error(err.message);
      });
    });
});
