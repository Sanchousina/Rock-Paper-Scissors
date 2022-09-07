"use strict"

const weapons = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
   let index = Math.floor(Math.random()*3);
   return weapons[index];
}

getComputerChoice();
