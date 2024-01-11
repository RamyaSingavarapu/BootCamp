const express = require('express');
const app = express();
const path = require('path');
const comments = [
    {
        id: 1,
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        id: 2,
        username: "Skyler",
        comment: "Id like to go bird watching with my dog"
    },
    {
        id: 3,
        username: "sk79gsl",
        comment: "Please delete your account! Todd"
    },
    {
        id: 4,
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
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
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