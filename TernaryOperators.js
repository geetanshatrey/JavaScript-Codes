function checkEqualsTo(a,b) {
    return a === b ? true : false;
}

function checkSign(a){
    return a >=0 ? (a === 0 ? "Zero" : "Positive") : "Negative";
}

console.log(checkEqualsTo(1,1));
console.log(checkEqualsTo(5,6));
console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-1));
