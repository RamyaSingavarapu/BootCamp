var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => {
    console.log("Connection Open!!")
}).catch((m) => {
    console.log("OH NO ERROR!!");
    console.log(m);
});

var personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

personSchema.pre('save', async function () {
    console.log("ABOUT TO SAVE!!!");
})

personSchema.post('save', async function () {
    console.log("AFTER SAVE!!!");
})


var Person = mongoose.model('Person', personSchema);

