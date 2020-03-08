function randomFunction(){
    return Math.random();
}

function returnWhole(num){
    return Math.floor(Math.random()*num);
}

function withinRange(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}
console.log(randomFunction());
console.log(returnWhole(25));
console.log(withinRange(16,29));
