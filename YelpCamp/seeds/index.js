const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 400; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: '66192c755411864c528f2dc3',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Vivamus ornare metus augue, at egestas nibh feugiat non. Donec varius vel urna nec lobortis. Etiam tincidunt ante ligula, id condimentum leo viverra sit amet!!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dimcjvuus/image/upload/v1716323969/YelpCamp/zq4a5lxgygs5q7gimgvg.avif',
                    filename: 'YelpCamp/mqtg9evud0hdt68ve62c'
                }
            ]
        })

        await camp.save();

    }
}
seedDB().then(() => { mongoose.connection.close() });