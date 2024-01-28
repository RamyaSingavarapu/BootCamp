const express = require('express');
const app = express();
const path = require('path');
var mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');
const AppError = require('./AppError');

var categories = ['fruit', 'vegetable', 'dairy', 'bakedgoods'];

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
    console.log("MONGO Connection Open!!")
}).catch((m) => {
    console.log("OH NO MONGO CONNECTION ERROR!!");
    console.log(m);
});


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));


app.get('/products', async (req, res) => {

    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category })
    }
})


app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})


app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    }
    catch (e) {
        next(e);
    }


})

app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError('Product Not Found!!', 404);
        }
        res.render('products/show', { product, categories })
    }
    catch (e) {
        next(e);
    }

})

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product, categories });
    }
    catch (e) {
        next(e);
    }
})

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { runValidators: true });
        res.redirect(`/products/${product.id}`);
    }
    catch (e) {
        next(e);
    }
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.use((err, req, res, next) => {
    const { status = 404 } = err;
    const { message = 'Product not found' } = err;
    res.status(status).send(message);
})



app.listen(3112, () => {
    console.log("LISTENING ON PORT 3112");
})