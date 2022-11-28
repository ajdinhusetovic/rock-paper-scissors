const userSide = document.querySelector('.user-side');
const computerSide = document.querySelector('.computer-side');
const userScore = document.querySelector('user-score');
const buttons = document.querySelectorAll('.btn');
const computerPick = document.querySelector('#computer-pick');
let userPick = document.querySelector('#user-pick');

// random computer choice
const getComputerChoice = () => {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random()*computerChoices.length);
    return computerChoices[rand];
}


let userSelection;

buttons.forEach ((btn) => {
    btn.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        if (btn.textContent.toLowerCase() === "rock" || btn.textContent.toLowerCase() === "paper" || btn.textContent.toLowerCase() === "scissors" ){
            userSelection = btn.textContent;
        }
        userPick.textContent = userSelection;
        computerPick.textContent = computerSelection;
    })
})












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
