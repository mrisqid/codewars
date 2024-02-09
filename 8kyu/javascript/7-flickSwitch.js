// Flick Switch

// Description
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
function flickSwitch1(arr){
  let result = []
  let flicker = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') flicker = !flicker
    result.push(flicker)
  }
  return result
}

// use array.map()
function flickSwitch2(arr){
  let flicker = true
  return arr.map((string) => {
    return string === 'flick' ? flicker === !flicker : flicker
  })
}

console.log(flickSwitch1(["codewars", "flick", "code", "wars"]))
console.log(flickSwitch2(["flick", "chocolate", "adventure", "sunshine"]))
console.log(flickSwitch1(["bicycle", "jarmony", "flick", "sheep", "flick"]))
console.log(flickSwitch2(["flick", "flick", "flick", "flick", "flick"]))
console.log(flickSwitch1(["john, smith, susan", "flick"]))
console.log(flickSwitch2(["bicycle"]))
console.log(flickSwitch1(["flick"]))
console.log(flickSwitch2([]))
