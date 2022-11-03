// variable to store data
var sum = 0;
var comp = 0;
var chipsEl = document.getElementById("chips-el");
var sumEL = document.getElementById("sum-el");
var lastResult = document.getElementById("last-el");
var gameResult = document.getElementById("result-el");
var message = document.getElementById("message-el");
var cardArray = [2,3,4,5,6,7,8,9,10,11]
var btn = document.getElementById("start-btn");
var hitbtn = document.getElementById("hit-btn");
var stayBtn = document.getElementById("stay-btn");
var list = document.getElementById("list-el");
var errorEl = document.getElementById("error-el");

//object
var player = {
    name: "Player",
    chips: 100
}

chipsEl.textContent = "Chips: $" + player.chips;

document.getElementById("welcome-el").innerText = "Welcome, " + player.name + "!";

hitbtn.disabled = true;
stayBtn.disabled = true;

//function to start the game
function start(){
    errorEl.hidden = true;
    hitbtn.disabled = false;
    stayBtn.disabled = false;
    let user = cardArray[Math.floor(Math.random() * 10)];
    list.textContent = "|" + user + "|";
    sum += user;
    comp += cardArray[Math.floor(Math.random() * 10)];

    sumEL.textContent = sum;
    message.textContent = "Wanna draw card again?";
    btn.disabled = true;
}

//function to increase the count
function hit(){
    //errorEL.style.visibility = "visible";
    let user = cardArray[Math.floor(Math.random() * 10)];
    list.textContent += user + "|";
    sum += user;
    comp += cardArray[Math.floor(Math.random() * 10)];
    
    sumEL.textContent = sum;

    if(sum > 21){
        stay();
    } else if(sum == 21){
        stay();
    } else if(sum < 21){
        message.textContent = "Wanna draw card again?";
    }
}

//function to save data
function stay(){
    if(sum == 21){
        gameResult.textContent = "Result: Win!! You've got Blackjack!";
        player.chips += 100;
    } else if(sum === comp){
        gameResult.textContent = "Result: Draw!!!!";
        player.chips += 10;
    } else if(sum > 21) {
        gameResult.textContent = "Result: Lose! Your card exceed 21";
        player.chips -= 25;
    } else if(sum > comp  || comp > 21){
        gameResult.textContent = "Result: Win!!!!";
        player.chips += 50;
    } else if(sum < comp && comp <= 21){
        gameResult.textContent = "Result: Lose!!!!";
        player.chips -= 35;
    }

    message.textContent = "";
    lastResult.textContent = "Player's card: " + sum + "\nComputer's Card: " + comp;
    sumEL.textContent = 0;
    chipsEl.textContent = "Chips: $" + player.chips;
}

function play(){
    list.textContent = 0;
    sumEL.textContent = 0;
    sum=0;
    comp=0;
    btn.disabled = false;
    hitbtn.disabled = true;
}