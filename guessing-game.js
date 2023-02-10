const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let randomInRange = (min, max) => {
  min = Math.ceil(min);   // rounds up to smallest integer greater than or equal to given number
  max = Math.floor(max);  // rounds down to largest integer less than or equal to given number
  return Math.floor(Math.random() * (max - min) + min);
}

let secretNumber = randomInRange(0, 100); // default random number between 0 and 100

let checkGuess = num => {                 // checks the input against the secret number

    if (num > secretNumber) {
      console.log("Too high");
      return false;
    }
    else if (num < secretNumber) {
      console.log("Too low");
      return false;
    }
    else if (num === secretNumber) {
      console.log("Correct!");
      return true;
    }

};

let askGuess = () => {                    // asks player for guesses

  rl.question('Enter a guess: ', (answer) => {
    let number = Number(answer);
    if (checkGuess(number) === true) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess();
    }
  });
}

let askRange = () => {                    // asks player for range of numbers

  rl.question("Enter a minimum number: ", (minAnswer) => {
    rl.question("Enter a maximum number: ", (maxAnswer) => {
      console.log(`I'm thinking of a number between ${minAnswer} and ${maxAnswer}...`);
      let min = Number(minAnswer);
      let max = Number(maxAnswer);
      secretNumber = randomInRange(min, max);
      askGuess();
    });
  });
};

askRange();
