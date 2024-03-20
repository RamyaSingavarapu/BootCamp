const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = 'NO-NAME' } = req.cookies
    res.send(`Hi ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ramya');
    res.cookie('animal', 'Tiger');
    res.send("OK!! I SEND YOU A COOKIE");
})

app.listen('3900', () => {
    console.log("SERVING ON PORT 3900");
})