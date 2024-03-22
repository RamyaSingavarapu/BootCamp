const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand').then(() => {
    console.log("MONGO Connection Open!!")
}).catch((m) => {
    console.log("OH NO MONGO CONNECTION ERROR!!");
    console.log(m);
});

// const p = new Product({ name: 'Ruby Grapefruit', price: 1.22, category: 'fruit' })

const seedProducts = [
    {
        name: 'Organic Baby Spinach',
        price: 1.3,
        category: 'vegetable'
    },
    {
        name: 'Juicy Watermelon',
        price: 1.8,
        category: 'fruit'

    },
    {
        name: 'Almond Milk',
        price: 3.4,
        category: 'dairy'
    },
    {
        name: 'Eggs',
        price: 5,
        category: 'dairy'
    }]


Product.insertMany(seedProducts).then(p => {
    console.log(p);
}).catch(e => {
    console.log('OH NO ERROR');
    console.log(e);
})