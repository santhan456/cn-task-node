var express = require('express');
var cors = require('cors');
var path = require('path');

const NewsAPI = require('newsapi');
// const newsApi = new NewsAPI('b053aa306bb24125b2dd9f4474907083');
const newsApi = new NewsAPI('383009a807dc4b739b2b3207350ab583');

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, 'build')));

app.get('/news', function (req, res) {

    const { q, page } = req.query;

    const newsQuery = {
        q: q ? `${q} AND UK` : "UK",
        language: 'en',
        pageSize: 20,
        page: page || 1
    };
    console.log(newsQuery);

    newsApi.v2.everything(newsQuery).then(response => {
        res.send(response);
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    });
});

app.get("*", function (req, res) {
    res.sendStatus(404);
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
