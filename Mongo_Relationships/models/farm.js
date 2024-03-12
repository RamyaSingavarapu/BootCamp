const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo').then(() => {
    console.log("MONGO CONNECTION OPEN");
}).catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR");
    console.log(err);
})

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Winter', 'Summer', 'Fall', 'Autumn']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     { name: 'Goddess Melon', price: 3.67, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.98, season: 'Fall' },
//     { name: 'Asparagus', price: 1.34, season: 'Autumn' }
// ])

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Fully Belly Farms', city: 'Guinda, CA' })
//     const Asparagus = await Product.findOne({ name: 'Asparagus' })
//     farm.products.push(Asparagus);
//     await farm.save();
//     console.log(farm);
// }
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fully Belly Farms' });
    const melon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    farm.products.push(melon);
    await farm.save()
    console.log(farm)
}
addProduct()



