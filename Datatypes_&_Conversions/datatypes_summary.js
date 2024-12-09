/*
The way the data is stored in memory and accessed it the datatype are categorised. 
 - Primitve => String, Number, Boolean, null, undefined, BigInt, Symbol.


 -Non-primitive(Reference Type) => Arrays, Objects, Functions
*/

//Primitve

const num = 23
const isNum = true
const str = "Kashmir"
const temp = 34.5
// console.log(typeof temp) //number
let city;
const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id === id2) //false

// const bigNum = 8754705709
// console.log(bigNum)

//Non-Primitive

const cities = ['mumbai', 'indore', 'amritsar', 'jammu']

const prop = {
    name : "tommy Shelby",
    series : "Peak Blinders",
    channel : "HBO"
}

const myfunc = () => {
    console.log("This is function")
}

// console.log(typeof cities)

console.log(typeof 23)
console.log(typeof true)
console.log(typeof "Valorant")
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof id)
console.log(typeof cities)
console.log(typeof prop)
console.log(typeof myfunc)

