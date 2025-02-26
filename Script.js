//What we are doing first? 
//We need to getComputerChoice - randomized choice in one of 3 possibilities.
//We have to generate 3 numbers that could serve 
// as operator that will allow to chose one of 3 options 
const choice = ["rock", "paper", "scissors"]

// Found solution on MDN web docs

//now need to use above to getComputerChoice, will use array for that 
function getRandomInt(min,max) {
    
    return Math.floor(Math.random() *(max - min) + min)
} 

function getComputerChoice() {
    return  choice[getRandomInt(0,3)]
}  
  
  console.log(getComputerChoice())

 //Now getHumanChoice, here i should still use an array to compare with player choices and according to it should get input from player about their choice. 
 // Important things: player needs to input one of 3 options in prompt. If his answer is not one of possible options alert should inform 
 // him about mistake he made (check spelling?) or that it is not a correct option. Also at that time game should be "paused" so not to count wrong answer.
//lets start with a prompt first


 function getPlayerChoice(){
    let playerinput;
    let correct = false
    do {  
        playerinput = prompt(
`Welcome to the rock paper scissors game !
To play a game You need to input one of the following choices below
            
            ROCK   or   PAPER    or   SCISSORS
        
*Mind Your spelling - Your choice needs to be exactly the same
or the game wont work(size of the letter deosnt matter)`)
            let playerchoice = playerinput.toLowerCase();
    switch (playerchoice) {
        case "rock":
            correct = true;
            return "rock";
            break;
        case "paper":
            correct = true;
            return "paper";
            break;
        case "scissors":
            correct = true;
            return "scissors";  
            break;
        default:    
        alert("This choice is incorrect, please check spelling!");
            break;
    }
} while (!correct); 
 }
 
 console.log(getPlayerChoice());

 let humanScore = 0
 let computerScore = 0