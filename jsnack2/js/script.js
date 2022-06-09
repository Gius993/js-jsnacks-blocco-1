// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero.

//chiedo numero

const userNumber = prompt("numero di 4 cifre");

let addNumber = 0;


for (let i = 0; i < userNumber.length; i++) {
  let singleNumber = parseInt(userNumber[i]);

  addNumber += singleNumber;
}
console.log(addNumber);
