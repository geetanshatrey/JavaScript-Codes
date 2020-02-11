function testStrict(val) {
  if(val === 7) {
    return "Equal";
  }
  else
    return "Unequal";
}
// === is strict equality. So 7 === '7' is false.

console.log(testStrict('7'));
console.log(testStrict(7));
