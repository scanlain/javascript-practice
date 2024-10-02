let score = new Number(77)
// console.log(score)

// console.log(score.toString())

// console.log(typeof score)

// console.log(score.toString().length)

// console.log(score.toFixed(2))

const num = 65.7973
// console.log(num.toPrecision(2)) //this methods returns a string type

let h = 1000000
// console.log(h.toLocaleString('en-IN')) // adds ',' in the numbers //10,00,000

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)


//**************************************Maths */

// console.log(Math.abs(-67)) // -ve is converted into 67
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.9))

// console.log(Math.sqrt(5))
// console.log(Math.pow(5, 2))
// console.log(Math.floor(Math.random()*10) + 1)

//to generate random values between a specified range
let min = 23
let max = 46
console.log(Math.floor(Math.random()*(max-min+1)) + min)

/*
Math.random() -> this is a random value between 0 and 1
Math.random()*10 -> this shifts the decimal to right side
Math.random()*10 + 1 ->  we don't want 0 to we add 1 in every random value generated
Math.floor(Math.random()*10 + 1) -> this gives us a whole number 
*/

