var outerWear="Jeans";

function myOutfit() {
  outerWear="Shirt"; //Precedence of local variable is more.
  return outerWear;  
}

console.log(myOutfit());

function timesFive(num) {
  return num*5;
}

console.log(timesFive(5));
x=timesFive(7);
console.log(x);
