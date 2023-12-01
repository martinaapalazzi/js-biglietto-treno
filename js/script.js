/* Chiedere all'utente il numero di chilometri che vuole percorrere.
Chiedere l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */ 


const userKm = prompt ('Quanti km vorebbe percorrere?')

console.log ( 'km', userKm, typeof userKm )

const userAge = prompt ('Quanti anni hai?')

console.log ( 'age', userAge, typeof userAge )

// km * 0.21€ console.log (math.random)

const ticketPrice = Math (userKm * 0.21)

console.log ( 'price', ticketPrice, typeof ticketPrice )

// if (userAge < 18) { 20% discount }
// else if (userAge > 65) { 40% discount}

if ( userAge < 18) {
    20%
}


if ( userAge > 65 ) {
    40%
}