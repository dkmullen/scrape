const puppeteer = require('puppeteer');
const $ = require('cheerio');

const scraper = (url, tagString) => {
  return puppeteer
  .launch()
  .then(browser => {
    return browser.newPage();
  })
  .then(page => {
    return page.goto(url).then(() => {
      return page.content();
    });
  })
  .then(html => {
    let results = [];
    $(tagString, html).each(function() {
      results.push($(this).text());
    });
    return results;
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = scraper;