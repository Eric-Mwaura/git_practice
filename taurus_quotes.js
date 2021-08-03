const readline = require('readline');
const chalk = require('chalk');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let quotes = ['Treat them like an option and they will cross you out completely', '2 things Taurus want: Be successful + Not leaving bed', 'Taurus will say it to our face, not behind your back.', 'A Taurus has a high tolerance for bullshit'];

const generateRandom = () => {
    let maximum = 3;
    let minimum = 0;
    let random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return random;
};

const isValidAnswer = (answer) => {
    if(typeof answer === 'string'){
        return true;
    } else{
        return false;
    }
};

const showAllQuotes = (viewed) => {
    for(let i = 0; i < quotes.length; i++){
        console.log('\n');
        if(i === viewed){
            console.log(chalk.green(`${i + 1}. ${quotes[i]}`));
        } else{
            console.log(`${i + 1}. ${quotes[i]}`);
        }
    }
};

const requestUserInput = (id) =>{
    rl.question("Would you like to see all our quotes? reply 'Yes' or 'No'", function(answer){
        if(!isValidAnswer(answer)){
            console.log(`${answer} is not a valid answer!`);
            requestUserInput(id);
        } else{
            if(answer.toLowerCase() === 'no'){
                rl.close();
            } else if(answer.toLowerCase() === 'yes'){
                showAllQuotes(id);
                rl.close();
            } else{
                console.log(`${answer} is not a valid answer`);
                requestUserInput(id);
            }
        }
    })
};

rl.on("close", function(){
    console.log(chalk.red('\nBYE BYE !!!'));
    process.exit(0);
});

const generateRandomMessage = (id) => {
    console.log(`Here is your Taurus quote for today: ${quotes[id]}`);
    console.log('\n');
    requestUserInput(id);
};

generateRandomMessage(generateRandom());