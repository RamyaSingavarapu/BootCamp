const express = require('express');
const app = express();
const User = require('./models/user');

app.set('view engine', 'ejs')

app.get('/register', (req, res) => {
    res.render('register');
})
app.get('/secret', (req, res) => {
    res.send('THIS IS A SECRET!! CANNOT SEE ME UNLESS YOU ARE LOGGED IN');
})

app.listen(3000, () => {
    console.log("SERVING ON PORT 3000")
})