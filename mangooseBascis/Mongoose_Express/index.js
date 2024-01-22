const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(() => {
    console.log("MONGO Connection Open!!")
}).catch((m) => {
    console.log("OH NO MONGO CONNECTION ERROR!!");
    console.log(m);
});


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/dog', (req, res) => {
    res.send("WOOF");
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})