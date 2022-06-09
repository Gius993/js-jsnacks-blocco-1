//Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.
const tagNumbers = [2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i< tagNumbers.length; i++ ){
	const thisNumber = tagNumbers[i];
	if(thisNumber % 2 === 0){
		document.getElementById("tag-b").innerHTML += thisNumber+" ";		
	}else {
		document.getElementById("tag-a").innerHTML += thisNumber+" ";		
		
	}
}
//const tagNumbersa = ["2",   "6", "8", "10"];
//const tagNumbersb = ["3", "7","9"];

//if(tagNumbersa){
	//.innerHTML = "La tua email è presente in elenco";
//}else{

//}

