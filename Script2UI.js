
const choice = ["rock", "paper", "scissors"]

function getRandomInt(min,max) {
    
    return Math.floor(Math.random() *(max - min) + min)
} 

function getComputerChoice() {
    return  choice[getRandomInt(0,3)]
}  
  

let humanChoice ;
let computerScore = 0;
let humanScore = 0; 
let roundsCounter = 0;

const btns = document.querySelectorAll(".button");
btns.forEach(btn => {
  btn.addEventListener("click", function() {
    humanChoice=(this.id);
    if (roundsCounter<5) {
        playRound();
        gameResult();
        } else {
            alert('Game Over! If You want to play again, refresh the page')
        }
  });
});


 
function playRound(){
    
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
    } else  {
            alert('Opponent chose '+computerChoice+'. You lost!');
            roundsCounter += 1;
            computerScore += 1;
    } 
      
    // Logic for informing player what is the current score
    const computerScoreMessage = document.querySelector("#computerScore");
    computerScoreMessage.textContent=`Computer Score:${computerScore}`;
    const humanScoreMessage = document.querySelector("#playerScore");
    humanScoreMessage.textContent=`Player Score:${humanScore}`;
    const roundsCounterMessage = document.querySelector("#roundsCounter");
    roundsCounterMessage.textContent=`Rounds:${roundsCounter}`;

    
}

function gameResult(){
if (roundsCounter === 5 && computerScore>humanScore) {
    const mainMessage = document.querySelector("#mainMessage");
    mainMessage.textContent=`GAME OVER!!
        You LOST!. Opponent Scored ${computerScore}. You scored ${humanScore}
        Refresh page if You want to try again`;
        

} else if (roundsCounter === 5 && humanScore>computerScore) {
    const mainMessage = document.querySelector("#mainMessage");
    mainMessage.textContent=`GOOD GAME!!
        You WON!. Opponent Scored ${computerScore}. You scored ${humanScore}
        Refresh page if You want to try again`;


} else if(roundsCounter === 5 && humanScore === computerScore){
    const mainMessage = document.querySelector("#mainMessage");
    mainMessage.textContent=`GOOD GAME!!
        It's a draw!. Opponent Scored ${computerScore}. You scored ${humanScore}
        Refresh page if You want to try again`;



}       
    /* it was really hard, had to look over internet a lot using mdn, finally for some last debuging used chatGPT and figured out to change the order of the loops. */        
}


