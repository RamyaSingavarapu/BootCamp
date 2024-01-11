const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "Id like to go bird watching with my dog"
    },
    {
        id: uuid(),
        username: "sk79gsl",
        comment: "Please delete your account! Todd"
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
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