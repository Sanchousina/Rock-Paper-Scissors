"use strict"

const weapons = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
   let index = Math.floor(Math.random()*3);
   return weapons[index];
}

// function getPlayerChoice(){
//     let str;
//     do{
//         str = prompt("Rock Paper Scissors?", "");
//         if(str === null) return null;
//         str = str.toLowerCase();
//     }while(str === "" || !weapons.includes(str))
//     return str;
// }


function playRound(playerChoice, computerChoice){
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

function reset(){
    playerWins = 0;
    computerWins = 0;
}

function determineWinner(){
    playerWins > computerWins ? console.log("You Won!!!")
    : playerWins < computerWins? console.log("You lost^(")
    : console.log("Friendship won!");
}

function tryAgain(){
    if(confirm("Wanna try again?")){
        game();
    }else{
        return;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(e){
        let playerChoice = e.target.value;
        console.log(playRound(playerChoice, getComputerChoice()));
    });
});

// function game(){
//     console.clear();
//     reset();

//     for(let i = 0; i < 5; i++){
//         let playerChoice = getPlayerChoice();
//         let computerChoice = getComputerChoice();

//         if(playerChoice === null){
//             return;
//         }

//         console.log(playRound(playerChoice, computerChoice));
//         console.log(`You: ${playerWins}\tComputer:${computerWins}`);
//     }

//     determineWinner();
//     tryAgain();
// }

// game();
