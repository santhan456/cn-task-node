var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b053aa306bb24125b2dd9f4474907083');



/* GET users listing. */
router.get('/', async function (req, res, next) {
    

    newsapi.v2.everything({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2017-12-01',
        to: '2017-12-12',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
          res.send(response)
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
      }).catch(e => {
          res.sendStatus(500);
      });
});


module.exports = router;
