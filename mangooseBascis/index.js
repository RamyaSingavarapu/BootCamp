const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27j017/movieApp').then(() => {
    console.log("Connection Open!!")
}).catch(() => {
    console.log("OH NO ERROR!!");
    console.log(err);
});
