var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => {
    console.log("Connection Open!!")
}).catch((m) => {
    console.log("OH NO ERROR!!");
    console.log(m);
});

var movieSchema = new mongoose.Schema({
    title: 'String',
    year: Number,
    score: Number,
    rating: 'String'
})

var Movie = mongoose.model('Movie', movieSchema);
//const amadeus = new movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

Movie.insertMany([
    { title: 'Bahubali', year: 2020, score: 9.4, rating: 'E' },
    { title: 'Magadheera', year: 2018, score: 9.1, rating: 'R' },
    { title: 'salaar', year: 2023, score: 9.0, rating: 'X' }
]).then(() => {
    console.log("It Worked!!");
}).catch(() => {
    console.log(e);
})
