const giveMeAJoke = require('give-me-a-joke');
const color = require('colors');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);

});