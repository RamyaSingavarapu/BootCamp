const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => {
    console.log("Connection Open!!")
}).catch(() => {
    console.log("OH NO ERROR!!");
    console.log(err);
});
const movieSchema = new mongoose.Schema({
    title: 'String',
    year: Number,
    score: Number,
    rating: 'String'
})
const movie = mongoose.model('Movie', movieSchema);
const amadeus = new movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });