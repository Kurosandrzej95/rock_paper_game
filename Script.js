//What we are doing first? 
//We need to getComputerChoice - randomized choice in one of 3 possibilities.
//We have to generate 3 numbers that could serve 
// as operator that will allow to chose one of 3 options 
// const Choice = ["rock", "paper", "scissors"]

// Found solution on MDN web docs

//now need to use above to getComputerChoice, will use array for that  
function getComputerChoice() {
    const Choice = ["rock", "paper", "scissors"]
    function getRandomInt(min,max) {return Math.floor(Math.random() *(max - min) + min);}
   
    return  Choice[getRandomInt(0,3)]
}  
  
  console.log(getComputerChoice())
  // Expected output: 0, 1 or 2