let kills = 23
// console.log(kills)

let count = new Number(30.69797)
// console.log(count)

let c1 = count.toExponential(1)
// console.log(typeof c1)

let c2 = count.toFixed(1)
// console.log(typeof c2) //returns a string. we can fix the number of decimal number after the point

let c3 = count.toPrecision(4)
// console.log(typeof c3) //returns a string. gives the precise value containing the same count of digits which was given

let c4 = count.toString()
// console.log(c4) //returns a string representation of a number

let money = 225000
let c5 = money.toLocaleString('en-IN')
// console.log(c5)


