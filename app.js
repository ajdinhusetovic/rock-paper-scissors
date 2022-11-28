const userSide = document.querySelector('.user-side');
const computerSide = document.querySelector('.computer-side');
const userScore = document.querySelector('#user-score');
const buttons = document.querySelectorAll('.btn');
const computerPick = document.querySelector('#computer-pick');
let userPick = document.querySelector('#user-pick');
const computerScore = document.querySelector('#computer-score');
const whoWon = document.querySelector('#win');

let userSelection;
let uScore = 0;
let cScore = 0;
let roundNum = 0;

// random computer choice
const getComputerChoice = () => {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random()*computerChoices.length);
    return computerChoices[rand];
}

const resetScore = () => {
    uScore = 0;
    cScore = 0;
    roundNum = 0;
}

buttons.forEach ((btn) => {
    btn.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        if (btn.textContent.toLowerCase() === "rock" || btn.textContent.toLowerCase() === "paper" || btn.textContent.toLowerCase() === "scissors" ){
            userSelection = btn.textContent;
        }
        userPick.textContent = userSelection;
        computerPick.textContent = computerSelection;
        if (userSelection === computerSelection){
            userScore.textContent = `USER: ${uScore}`;
            computerScore.textContent = `COMPUTER: ${cScore}`;
            whoWon.textContent = "Tie"
        }else if (userSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
            userScore.textContent = `USER: ${++uScore}`;
            whoWon.textContent = "User wins this round";
        }else if (userSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
            userScore.textContent = `USER: ${++uScore}`;
            whoWon.textContent = "User wins this round";
        }else if (userSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
            userScore.textContent = `USER: ${++uScore}`;
            whoWon.textContent = "User wins this round";
        }else{
            computerScore.textContent = `COMPUTER: ${++cScore}`;
            whoWon.textContent = "Computer wins this round"
        }
        roundNum++;
        console.log(roundNum);
        if (uScore >= 5){
            resetScore();
            whoWon.textContent = "User wins game";
        }else if (cScore >= 5){
            resetScore()
            whoWon.textContent = "Computer wins game"
        }
    })
});










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
