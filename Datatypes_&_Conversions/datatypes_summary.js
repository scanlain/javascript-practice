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

// console.log(typeof 23)
// console.log(typeof true)
// console.log(typeof "Valorant")
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof id)
// console.log(typeof cities)
// console.log(typeof prop)
// console.log(typeof myfunc)

//Stack, Heap

//Primitive datatypes uses the stack memory
//Non_primitve or reference datatypes uses the heap memory


//Primitive Example
let num1 = 10;
let num2 = num1

num2 = 100

// console.log(num1)
/*
So what happens here is when we assign a variable to another variable, the copy of value of the original variable is passed. So even if we make changes in any one of them, the changes don't affect to the other one. 
*/

//Non-Primitive Example

let obj1 = {
    country :  "India",
    city : "amritsar",
    food : "chole bhature"
}

let obj2 = obj1

obj2.food = "lassi"

// console.log(obj1)
// console.log(obj2)
/*
So what happens here is when we assign an object to another object, the reference of the original object is passed to the other one. So now both the objects are pointing to the same values in the heap memory. So even if we make changes to any of them, changes will be seen in both of them.
*/



