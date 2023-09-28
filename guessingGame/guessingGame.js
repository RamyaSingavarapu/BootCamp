let maximum = parseInt(prompt("Enter a maximum number"))
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"))
}
let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)
let guess = parseInt(prompt("Enter your first guess! (Type 'q' to quit game)"))
let attempt = 1;
while (guess !== targetNum) {
    if (guess === "q") {
        break;
    }
    if (guess < targetNum) {
        guess = prompt("Too Low!! Enter a new guess")
        attempt++;
    }
    else if (guess > targetNum) {
        guess = prompt("Too High!! Enter a new guess")
        attempt++;
    }
    else {
        break;
    }
}
if (guess === "q") {
    console.log("OK!! YOU QUIT")
} else {
    console.log("CONGRATS!!YOU WIN")
    console.log(`You got it! It took you ${attempt} guesses`)
}