// Fundamentals: Return
// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Note: All math operations will be: a (operation) b

function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}

function exponent(a,b){
  return a ** b
}

function subt(a,b){
  return a - b
}

// Alternative solution
// point-free & destructuring
// const [{pow: exponent}, {add, subtract: subt, multiply, divide, modulo: mod}] = [Math, require('ramda')]

// Another solution
// not sure what the name of this method
// add=(ᅟ,ᅠ)=> ᅟ + ᅠ;
// divide=(ᅟ,ᅠ)=> ᅟ / ᅠ;
// multiply=(ᅟ,ᅠ)=> ᅟ * ᅠ;
// mod=(ᅟ,ᅠ)=> ᅟ % ᅠ;
// exponent=(ᅟ,ᅠ)=> ᅟ ** ᅠ;
// subt=(ᅟ,ᅠ)=> ᅟ - ᅠ;

// similar with above
// const add = (_, __) => _ + __

// const divide =  (_, __) => _ / __

// const multiply =  (_, __) => _ * __

// const mod = (_, __) => _ % __

// const exponent = (_, __) => _ ** __

// const subt = (_, __) => _ - __

console.log(add(1, 2))
console.log(divide(1, 2))
console.log(multiply(1, 2))
console.log(mod(1, 2))
console.log(exponent(1, 2))
console.log(subt(1, 2))