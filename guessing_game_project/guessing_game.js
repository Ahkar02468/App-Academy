const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber = 0;
let numAttempts = 0;

const checkGuess = (checkNumber) => {
    checkNumber = Number(checkNumber);
    if(checkNumber > secretNumber){
        console.log("Too High");
        return false;
        
    }
    if(checkNumber < secretNumber){
        console.log("Too Low");
        return false;
    }
    console.log("Correct");
    return true;
    
}

const askGuess = () => {
   rl.question('Enter a guess: ', (answer) => {
    
    if(numAttempts === 0){
        console.log('You lose you have ' + numAttempts + ' attempt left.')
        rl.close();
        return false;
    }
    if(checkGuess(answer)){
        console.log("You win!");
        rl.close();
    }else{
        numAttempts--;
        askGuess();  
    }
    
   });
}

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const askRange = () => {
    rl.question("Enter a min number: ", (min) => {
      rl.question("Enter a max number: ", (max) => {
        secretNumber = randomInRange(min, max);
        askGuess();
      });
    });
  };

const asklimit = () => {
    rl.question('Enter attemps you want to try: ', (attempts) => {
        numAttempts = Number(attempts);
        askRange();
    })
}

asklimit();
