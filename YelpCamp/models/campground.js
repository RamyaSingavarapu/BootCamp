const mongoose = require('mongoose');
const Review = require('./reviews');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    title: String,
    price: {
        type: Number,
        //min: 0
    },
    description: String,
    image: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema)