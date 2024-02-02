// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Solution 1 - use for loop
function grow1(x) {
  let result = 1;

  for(let i = 0; i < x.length; i++) {
    result *= x[i];
  }

  return result;
}

// Solution 2 - use array.reduce, ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function grow2(x) {
  return x.reduce((acc, curr) => acc * curr, 1);
}

// Solution 3 - use eval, ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
function grow3(x) {
  return eval(x.join("*"));
}

// Solution 4 - use for loop but difference 1
function grow4(x) {
  let result = 1;

  for(i in x) {
    result *= x[i];
  }

  return result;
}

// Solution 5 - use array.map, ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function grow4(x) {
  let result = 1;

  x.map(item => result *= item)

  return result;
}

// Solution 5 - use for loop but difference 2
function grow5(x) {
  let result = 1;

  for(i of x) {
    result *= i;
  }

  return result;
}

// Solution 6 - use foreach
function grow6(x) {
  let result = 1;

  x.forEach((i) => result *= i)

  return result;
}

// Solution 7 - use recursive method
function grow7(x) {
  return tailRecursive(1, x);
}
function tailRecursive(c,x){
  return x.length === 0 ? c :tailRecursive(c*x[0], x.slice(1));
}

console.log(grow1([1, 2, 3, 4]));
console.log(grow2([1, 2, 3, 4]));
console.log(grow3([1, 2, 3, 4]));
console.log(grow4([1, 2, 3, 4]));
console.log(grow5([1, 2, 3, 4]));
console.log(grow6([1, 2, 3, 4]));
console.log(grow7([1, 2, 3, 4]));
