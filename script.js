"use strict"

const weapons = ['rock', 'paper', 'scissors'];
let playerWins = 0, computerWins = 0;

function getComputerChoice(){
   let index = Math.floor(Math.random()*3);
   return weapons[index];
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock"){
        if(computerChoice == "scissors"){
            playerWins++;
            return "You win! Rock beats scissors";
        }else if(computerChoice == "paper"){
            computerWins++;
            return "You lose! Paper beats rock";
        }else{
            return "It's a tie!"
        }
    }
    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            playerWins++;
            return "You win! Scissors beat paper";
        }else if(computerChoice == "rock"){
            computerWins++;
            return "You lose! Rock beats scissors";
        }else{
            return "It's a tie!"
        }
    }
    if(playerChoice == "paper") {
        if(computerChoice == "rock"){
            playerWins++;
            return "You win! Paper beats rock";
        }else if(computerChoice == "scissors"){
            computerWins++;
            return "You lose!  Scissors beat paper";
        }else{
            return "It's a tie!"
        }
    }
}

let playerChoice = "ScissorS";
let computerChoice = getComputerChoice();
console.log(playerChoice);
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));