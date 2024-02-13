// Sum without highest and lowest number

// Description
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input Validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  return (Array.isArray(array) && array.length > 1) ? array.reduce((a, c) => a + c, 0) - Math.max(...array) - Math.min(...array) : 0
}

console.log(sumArray(null))
console.log(sumArray([]))
console.log(sumArray([3]))
console.log(sumArray([3, 5]))
console.log(sumArray([ 6, 2, 1, 8, 10 ]))
console.log(sumArray([ 0, 1, 6, 10, 10 ]))
console.log(sumArray([ -6, -20, -1, -10, -12 ]))
console.log(sumArray([ -6, 20, -1, 10, -12 ]))