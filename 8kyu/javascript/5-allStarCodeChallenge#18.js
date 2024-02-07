// All Star Code Challenge #18

// Description:
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ex:

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// Notes
// - The first argument can be an empty string
// - In languages with no distinct character data type, the second argument will be a string of length 1
function strCount1(str, letter){
  return str.split(letter).length - 1
}

// use for loop
function strCount2(str, letter){
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) count++
  }

  return count
}

// use .replace() with RegExp
function strCount3(str, letter){
  return str.length - str.replace(new RegExp(letter, "gi"), '').length
}

// use .match() with RegExp
function strCount4(str, letter){
  return (str.match(new RegExp(letter, 'g')) || []).length
}

console.log(strCount1("Hello", "o"))
console.log(strCount1("Hello", "l"))
console.log(strCount1("", "z"))

console.log(strCount2("Hello", "o"))
console.log(strCount2("Hello", "l"))
console.log(strCount2("", "z"))

console.log(strCount3("Hello", "o"))
console.log(strCount3("Hello", "l"))
console.log(strCount3("", "z"))

console.log(strCount4("Hello", "o"))
console.log(strCount4("Hello", "l"))
console.log(strCount4("", "z"))
