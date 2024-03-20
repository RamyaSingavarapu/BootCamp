const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send("HEY THERE!!");
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ramya');
    res.send("OK!! I SEND YOU A COOKIE");
})

app.listen('3900', () => {
    console.log("SERVING ON PORT 3900");
})