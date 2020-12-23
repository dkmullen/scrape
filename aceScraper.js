const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://aceknox.com';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    // console.log(html)
    $('.mat-card-title', html).each(function() {
      console.log($(this).text());
    });
    process.exit();
  })
  .catch(function(err) {
    //handle error
  });