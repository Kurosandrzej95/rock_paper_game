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
  


 //Now getHumanChoice, here i should still use an array to compare with player choices and according to it should get input from player about their choice. 
 // Important things: player needs to input one of 3 options in prompt. If his answer is not one of possible options alert should inform 
 // him about mistake he made (check spelling?) or that it is not a correct option. Also at that time game should be "paused" so not to count wrong answer.
//lets start with a prompt first


 function getPlayerChoice(){
    let playerInput
    let correct = false
    const choiceRock = document.querySelector("#choiceRock");
    const choicePaper = document.querySelector("#choicePaper");
    const choiceScissors = document.querySelector ("#choiceScissors")

    choiceRock.onclick = () => alert(`You chose ROCK! Oponnent choose ${getComputerChoice().toUpperCase()}`);
    choicePaper.onclick = () => alert(`You chose PAPER! Oponnent choose ${getComputerChoice().toUpperCase()}`);
    

    do {  
        playerPrompt = prompt(
`Welcome to the rock paper scissors game !
To play a game You need to input one of the following choices below
                        
         ROCK   or   PAPER    or   SCISSORS
                    
*Mind Your spelling - Your choice needs to be exactly the same
or the game wont work (size of the letters deosnt matter)`);
    
    if (playerPrompt === null){
        playerInput = '';}
        else {
            playerInput = playerPrompt.trim().toLowerCase();
        }
    
      

    switch (playerInput) {
        
        case "":
            correct = false;
            alert( "Okay, You dont want to play, close the tab and move on");
            break;
        case null:
            correct = false;
            alert( "Okay, You dont want to play, close the tab and move on");
            break;    
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
 
 function playGame(){

    let humanScore = 0
    let computerScore = 0
    let roundsCounter = 0
 
            function playRound(){
                let humanChoice = getPlayerChoice();
                let computerChoice = getComputerChoice();
              console.log(computerChoice) 
            
                if (humanChoice === computerChoice) {
                    alert('Opponent also chose '+computerChoice+'. It\'s a draw!');
                    roundsCounter += 1;
                } else if (humanChoice === choice[1] && computerChoice === choice[0]) {
                        alert('Opponent chose '+computerChoice+'. You won!');
                        roundsCounter += 1;
                        humanScore += 1;
                } else if (humanChoice === choice[2] && computerChoice === choice[1]) {
                        alert('Opponent chose '+computerChoice+'. You won!');
                        roundsCounter += 1;
                        humanScore += 1;
                } else if (humanChoice === choice[0] && computerChoice === choice[2]) {
                        alert('Opponent chose '+computerChoice+'. You won!');
                        roundsCounter += 1;
                        humanScore += 1; 
                } else if (computerChoice === choice[1] && humanChoice === choice[0]) {
                        alert('Opponent chose '+computerChoice+'. You lost!');
                        roundsCounter += 1;
                        computerScore += 1;
                } else if (computerChoice === choice[2] && humanChoice === choice[1]) {
                        alert('Opponent chose '+computerChoice+'. You lost!');
                        roundsCounter += 1;
                        computerScore += 1;
                } else if (computerChoice === choice[0] && humanChoice === choice[2]) {
                        alert('Opponent chose '+computerChoice+'. You lost!');
                        roundsCounter += 1;
                        computerScore += 1;
                } 
                                        
            }


if (roundsCounter === 5 && computerScore>humanScore) {
    alert(`GAME OVER!!
        You LOST!. Opponent Scored ${computerScore}. You scored ${humanScore}
        Refresh page if You want to try again`)
} else if (roundsCounter === 5 && humanScore>computerScore) {
    alert(`GOOD GAME!!
        You WON!. Opponent Scored ${computerScore}. You scored ${humanScore}
        Refresh page if You want to try again`)
} else if(roundsCounter === 5 && humanScore === computerScore){alert(`GOOD GAME!!
    It's a draw!. Opponent Scored ${computerScore}. You scored ${humanScore}
    Refresh page if You want to try again`)
}       
    /* it was really hard, had to look over internet a lot using mdn, finally for some last debuging used chatGPT and figured out to change the order of the loops. */        
}  

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
