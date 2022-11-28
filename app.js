const userSide = document.querySelector('.user-side');
const computerSide = document.querySelector('.computer-side');
const userScore = document.querySelector('user-score');


// random computer choice
const getComputerChoice = () => {
    for (let i = 0; i < 5; i++){
        const computerChoices = ["rock", "paper", "scissors"];
        const rand = Math.floor(Math.random()*computerChoices.length);
        return computerChoices[rand];
    }
}














/*
if (computerSelection === userSelection){
        console.log("Tie");
    }else if (userSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        console.log("User wins");
    }else if (userSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        console.log("User wins");
    }else if (userSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        console.log("User wins")
    }else{
        console.log("Computer wins")
    }
*/
