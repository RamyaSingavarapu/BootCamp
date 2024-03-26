const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'notagoodsecret' }));

const requireLogin = async (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    } next();
}

app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else {
        res.send('TRY AGAIN');
    }
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.listen(4000, () => {
    console.log("SERVING ON PORT 4000")
})