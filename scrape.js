const scraper = require('./scraper');
const url = 'https://selfservice.knoxapps.org/ess/employmentopportunities/jobfeed.xml.ashx';

scraper(url, 'job')
  .then(results => {
    results.forEach(result => {
      console.log(result);
    })
    process.exit();
  })
  .catch(err => {
    console.log(err);
  });