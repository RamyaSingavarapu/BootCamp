var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(() => {
    console.log("Connection Open!!")
}).catch((err) => {
    console.log("OH NO ERROR!!");
    console.log(err);
});

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
var Product = mongoose.model('Product', productSchema);
var bike = new Product({ name: 'RoyalEnfield', price: 500 })
bike.save().then((data) => {
    console.log("IT WORKED")
    console.log(data)
}).catch((err) => {
    console.log("OH NO ERROR")
    console.log(err)
})
