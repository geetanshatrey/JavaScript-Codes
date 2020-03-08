var ourDog={
    "name": "Casper",
    "age": 16,
    "breed": "Pomerian"
}

console.log(ourDog.name);
ourDog.name = "Tom"; //updating the value of name 
console.log(ourDog.name); 

ourDog.bark= "wow woow"; //Adding a new property

console.log(ourDog);

delete ourDog.bark;

console.log(ourDog);
