// Input dell'utente
let kmTrip = parseInt(prompt("Inserisci i Km che vuoi percorrere: "));
let userAge = parseInt(prompt("Inserisci la tua eta': "));

// Calcolo del prezzo senza sconto
let ticketPrice = kmTrip * 0.21;

// Dichiarazione variabile dello sconto
let sale;

// Calcolo dello sconto se disponibile
if (userAge < 18) {
    sale = ticketPrice * 20 / 100;
    ticketPrice -= sale;
} else if (userAge > 65) {
    sale = ticketPrice * 40 / 100;
    ticketPrice -= sale;
}

// Stampa del prezzo nel documento
document.getElementById("output").innerHTML = "Il Biglietto del treno costa: " + "<strong>" + ticketPrice.toFixed(2) + "</strong>";