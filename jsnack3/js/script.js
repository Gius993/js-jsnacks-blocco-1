// - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

//inserire numero
//const userNumber = prompt("numero");
let totalSome = 0;

for (let i = 0; i < 10; i++) {
	let userNumber = parseInt(prompt("inserisci numero"));
	totalSome += userNumber;
}
console.log(totalSome);


