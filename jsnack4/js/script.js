// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
const tagNumbers = [];


for (let i = 0; i < 6; i++) {
	const userNumber = prompt("inserisci numero");
	if(userNumber % 2 != 0){
		tagNumbers.push(userNumber);
	}
	
}
