const express = require('express');
const app = express();
const path = require('path');
const comments = [
    {
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        username: "Skyler",
        comment: "Id like to go bird watching with my dog"
    },
    {
        username: "sk79gsl",
        comment: "Please delete your account! Todd"
    },
    {
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('views', path.join(__dirname, '/views'));
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment })
    res.redirect('/comments')
})
app.get('/tacos', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/restDemo.html'))
})
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.render('post.ejs', { meat: meat, qty: qty })
})
app.listen(4000, () => {
    console.log("Listening on port 4000");
})