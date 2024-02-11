// Reversing Fun

// Description
// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:
// Let's say you start with this: "012345"

// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

// Input:
// A string of length 1 - 1000

// Output:
// A correctly reordered string.

function flipNumber1(str){
  let convertToArr = str.split('').reverse()
  let result = []

  for (let i = 0; i < str.length; i++) {
    result.push(convertToArr[0])
    convertToArr.shift()
    convertToArr = convertToArr.reverse()
  }

  return result.join('')
}

// use while
function flipNumber2 (string) {
  let out = [];
  let chars = string.split("");

  while (chars.length) {
  	out.push(chars.reverse().shift());
  }

  return out.join("");
}

console.log(flipNumber1("012"))
console.log(flipNumber1("012345"))
console.log(flipNumber1("0123456789"))
console.log(flipNumber2("012"))
console.log(flipNumber2("012345"))
console.log(flipNumber2("0123456789"))