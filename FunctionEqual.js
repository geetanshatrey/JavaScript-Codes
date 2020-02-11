function testEqual(val,cal) {
  if(val==cal){
    return "Equal";
  }
  else {
    return "Unequal";
  }
}
console.log(testEqual(10,10));
console.log(testEqual(10,20));
