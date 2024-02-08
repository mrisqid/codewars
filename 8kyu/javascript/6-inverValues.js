// Invert values

// Description
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// ex:
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invert1(array) {
  let invertArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      invertArr.push(0)
    } else {
      invertArr.push(-array[i])
    }
  }
  return array.length > 0 ? invertArr : []
}


// use array.map()
const invert2 = array => array.map(num => -num);

console.log(invert1([1, 2, 3, 4, 5]))
console.log(invert2([1, -2, 3, -4, 5]))
console.log(invert1([]))
console.log(invert1([0]))
