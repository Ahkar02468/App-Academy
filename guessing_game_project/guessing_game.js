const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let secretNumber = 34;

const checkGuess = (checkNumber) => {
    checkNumber = Number(checkNumber);
    if(checkNumber > secretNumber){
        console.log("Too High");
        rl.close();
        return false;
        
    }
    if(checkNumber < secretNumber){
        console.log("Too Low");
        rl.close();
        return false;
    }
    if(checkNumber === secretNumber){
        console.log("Correct");
        rl.close();
        return true;
    }
    
}

function askGuess() {
    return rl.question('Enter a guess: ', checkGuess);
}

askGuess();

// askGuess.question('Enter a guess: ', checkGuess);

// console.log(checkGuess(34));