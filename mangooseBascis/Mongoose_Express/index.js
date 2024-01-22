const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
    console.log("MONGO Connection Open!!")
}).catch((m) => {
    console.log("OH NO MONGO CONNECTION ERROR!!");
    console.log(m);
});


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('index', { products })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})