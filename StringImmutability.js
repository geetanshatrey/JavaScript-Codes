var firstName="Geetansh";
var firstLetter=firstName[0];
console.log(firstLetter);
firstName[0]="H"; //Shows an error. String immutability.
var thirLastLetter=firstName[firstName.length-3];
console.log(thirLastLetter);
