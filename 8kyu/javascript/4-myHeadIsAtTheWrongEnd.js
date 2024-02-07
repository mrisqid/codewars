// My head is at the wrong end!

// DESCRIPTION
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat1(arr) {
  return [arr[2], arr[1], arr[0]]
}

// use array.reverse() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse?retiredLocale=id
function fixTheMeerkat2(arr) {
  return arr.reverse()
}

// another simple solution
function fixTheMeerkat3([tail, body, head]) {
  return [head, body, tail]
}

console.log(fixTheMeerkat1(["tail", "body", "head"]))
console.log(fixTheMeerkat2(["tails", "body", "heads"]))
console.log(fixTheMeerkat3(["bottom", "middle", "top"]))
console.log(fixTheMeerkat1(["lower legs", "torso", "upper legs"]))
console.log(fixTheMeerkat1(["ground", "rainbow", "sky"]))
