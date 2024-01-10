const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('views', path.join(__dirname, '/views'));
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