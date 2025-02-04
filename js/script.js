"use strict";

// Hent HTML-elementer
const rollButton = document.getElementById("rollDice");
const numOfDiceInput = document.getElementById("numOfDice");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

// Array af terningebilleder (placer terningebilleder i en "img" mappe, hvis nødvendigt)
const diceFaces = [
    "img/1.png", 
    "img/2.png", 
    "img/3.png", 
    "img/4.png", 
    "img/5.png",
    "img/6.png", 
];

// Funktion til at rulle terninger
function rollDice() {
    const numOfDice = parseInt(numOfDiceInput.value); // Hent antal terninger
    let results = [];
    let images = [];

    // Rul hver terning
    for (let i = 0; i < numOfDice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1; // Generer et tal fra 1-6
        results.push(roll);
        images.push(`<span class="dice">${diceFaces[roll]}</span>`); // Tilføj emoji eller billede
    }

    // Opdater HTML med resultater
    diceResult.textContent = `You rolled: ${results.join(", ")}`;
    diceImages.innerHTML = images.join(""); // Viser terningebilleder
}

// Tilføj event listener til knappen
rollButton.addEventListener("click", rollDice);
