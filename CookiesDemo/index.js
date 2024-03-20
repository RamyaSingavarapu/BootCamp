const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('this-is-my-secret'));

app.get('/greet', (req, res) => {
    const { name = 'NO-NAME' } = req.cookies
    res.send(`Hi ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ramya');
    res.cookie('animal', 'Tiger');
    res.send("OK!! I SEND YOU A COOKIE");
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('OK SIGNED YOUR FRUIT COOKIE');
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
    //res.send(req.cookies)
})

app.listen('3900', () => {
    console.log("SERVING ON PORT 3900");
})