const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://selfservice.knoxapps.org/ess/employmentopportunities/jobfeed.xml.ashx';

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
    $('job', html).each(function() {
      console.log($(this).text());
      console.log('////////////////////////////////////////', '\n\n');
    });
    process.exit();
  })
  .catch(function(err) {
    //handle error
  });