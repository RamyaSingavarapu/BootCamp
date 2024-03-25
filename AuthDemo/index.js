const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const path = require('path');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE');
})
app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    })
    await user.save();
    res.redirect('/');
})

app.get('/secret', (req, res) => {
    res.send('THIS IS A SECRET!! CANNOT SEE ME UNLESS YOU ARE LOGGED IN');
})



app.listen(4000, () => {
    console.log("SERVING ON PORT 4000")
})