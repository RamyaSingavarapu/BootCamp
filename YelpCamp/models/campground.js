const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: {
        type: Number,
        //min: 0
    },
    description: String,
    image: String,
    location: String
})

module.exports = mongoose.model('Campground', CampgroundSchema)