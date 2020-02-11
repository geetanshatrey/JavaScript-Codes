function testElseIf(val) {

  if(val>10) {
    return "Greater than 10.";
  }
  else if(val>5) {
    return "Greater than 5 and less than 10.";
  }
  else if(val>0) {
    return "Greater than 0 and less than 5.";
  }
}

console.log(testElseIf(15));
console.log(testElseIf(7));
console.log(testElseIf(3));
