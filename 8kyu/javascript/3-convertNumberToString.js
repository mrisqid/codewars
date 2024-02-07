// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
function numberToString1(num) {
  return (num).toString()
}

// another solution use String()
function numberToString2(num) {
  return String(num)
}

// use ""+num / num+""
function numberToString3(num) {
  return num + ""
}

// use `` template literals
function numberToString4(num) {
  return `${num}`
}

console.log(numberToString1(123))
console.log(numberToString2(123))
console.log(numberToString3(123))
console.log(numberToString4(123))