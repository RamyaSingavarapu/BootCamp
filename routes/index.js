const express = require('express');
const app = express();
app.get('/cats', (req, res) => {
    res.send("MEOW");
})
app.get('/dogs', (req, res) => {
    res.send("BOWydrfhtjg!!");
})
app.post('/cats', (req, res) => {
    res.send("POST MEOW!!");
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`Hello from the ${subreddit} page`);
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`Hello from the ${subreddit} page with ${postId} id`);
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    const { color } = req.query;
    res.send(`<h1>Search results for:${q} with color:${color}</h1>`);
})

app.get('*', (req, res) => {
    res.send("SORRY!! WE CANNOT FIND THE PATH");
})
app.listen(3030, () => {
    console.log("LISTENING ON PORT 3030");
})
