var express = require('express');
var cors = require('cors');

const NewsAPI = require('newsapi');
const newsApi = new NewsAPI('b053aa306bb24125b2dd9f4474907083');

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/news', async function (req, res) {

    const {q,page} = req.query;

    newsApi.v2.everything({
                q: q ? `${q} AND UK` : "UK",
                language: 'en',
                sortBy: 'popu',
                pageSize: 20,
                page
            }).then(response => {
                res.send(response);
            }).catch(e => {
                console.log(e);
                res.sendStatus(500);
        });
});

app.listen(2000, () => {
    console.log(`listening at http://localhost:${2000}`)
})
