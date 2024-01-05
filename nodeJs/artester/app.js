const giveMeAJoke = require('give-me-a-joke');
const color = require('colors');
const figlet = require('figlet');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);

});
figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});