const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
    res.render("home.ejs");
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('rand.ejs', { random: num })
})
app.get('/countries', (req, res) => {
    const countries = ['India', 'Germany', 'Korea', 'China', 'USA']
    res.render('countries', { allCountries: countries })

})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    if (data) {
        res.render('subreddit', { ...data })
    }
    else {
        res.render('nodata', { subreddit })
    }

})
app.listen(9000, () => {
    console.log("LISTENING ON PORT 3030");
})
