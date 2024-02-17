// Convert a String to a Number!

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
const stringToNumber1 = function(str){
  return Number(str)
}
const stringToNumber2 = function(str){
  return parseInt(str)
}
const stringToNumber3 = function(str){
  return +str
}
console.log(stringToNumber1('1234'))
console.log(stringToNumber2('605'))
console.log(stringToNumber3('1405'))
console.log(stringToNumber3('-7'))