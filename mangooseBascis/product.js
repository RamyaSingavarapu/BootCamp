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
        required: true,
        min: [0, 'It must be a positive value']
    },
    categories: [String],
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        instore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})


//var bike = new Product({ name: 'RoyalEnfield', price: 500, categories: ['cycling', 'riding'], //onSale: 0, qty: { online: 0, inStore: 0 } })
/*bike.save().then((data) => {
    console.log("IT WORKED")
    console.log(data)
}).catch((err) => {
    console.log("OH NO ERROR")
    console.log(err)
})*/
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.newCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { price: 100, onSale: true })

}
var Product = mongoose.model('Product', productSchema);


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Audi" });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.newCategory("Outdoor");
    console.log(foundProduct);
}
Product.fireSale().then((res) => console.log(res))
findProduct();




//var pump = new Product({ name: 'TyrePump', price: 20 })
//pump.save()
/*Product.findOneAndUpdate({ name: 'TyrePump' }, { price: -20 }, { new: true, runValidators: true }).then((data) => {
    console.log("IT WORKED")
    console.log(data)
}).catch((err) => {
    console.log("OH NO ERROR")
    console.log(err)
})*/

/*var car = new Product({ name: 'Audi', price: 15000, size: 'Xs' })
car.save().then((data) => {
    console.log("IT WORKED")
    console.log(data)
}).catch((err) => {
    console.log("OH NO ERROR")
    console.log(err)
})*/
