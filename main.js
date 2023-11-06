'use strict';

// Variabile html
const priceElement = document.getElementById('price')

// Richiesta all'utente di inseririe i km da percorrere e la sua età
const kmTrip = parseInt(prompt('Inserisci i km da percorrere'));
const userAge = parseInt(prompt('Inserisci la tua età'));

// Calcolo prezzo del biglietto in base ai km
let priceTrip = (0.21 * kmTrip);

// Sconto del prezzo del 20% se minorenne o del 40% se over 65
if (userAge < 18) {
    priceTrip = (priceTrip - (priceTrip * 0.20));
    console.log('Sconto del 20% applicato');

} else if (userAge > 65) {
    priceTrip = (priceTrip - (priceTrip * 0.40));
    console.log('Sconto del 40% applicato');
}

// Arrotondamento del prezzo
priceTrip = priceTrip.toFixed(2);
console.log('Il prezzo del tuo biglietto è:', priceTrip);
priceElement.innerHTML += (priceTrip + '€');