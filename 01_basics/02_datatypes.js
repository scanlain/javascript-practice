let naav = "scanlain"
let age = 24
let isEmployed = false;

//string has length of maximum 2^53 - 1 elements

// console.table([naav, age, isEmployed])
// console.log(typeof null) //it is of object type(Some say this a error of JS)
// console.log(typeof undefined) // it has own type undefined

//Primitive : String, Number, Boolean, null, undefined, Symbol, BigInt
//Refrence (Non-Primitive) : Array, Objects, Functions


//When we create variables of type Symbol even though they store same value they wont be same
let s1 = Symbol('123');
let s2 = Symbol('456')
// console.log(s1 === s2) // gives false

// let bigNumber = 5675768957535456486745869n
// console.log(bigNumber)

const heros = ['shaktiman', 'naagraj', 'doga']
let myObj = {
    naav : "hitesh",
    age : 23,
}

let myFun = function(){
    console.log("Hello World");
}

// console.log(typeof myFun)

let myNull = null
// console.log(typeof myNull) //typeOf of variable storing is Object

/* 
Undefined -> undefined
Null -> Object
Boolean -> boolean
Number -> number
String -> string
Object -> object
function -> function
Symbol -> symbol
*/


//**************************************Memory related  */

//Stack : Primitive datatypes are stored in stack
//heap : Non primitive datatypes are stored in heap

/*
Whenever stack memory is used , we get a copy of variable stored in it.
Whenever heap memory is used , we get a reference of variable stored in it, so changes made affect the original value.
*/

let myName = "scanlain"
let myAnotherName = myName
myAnotherName = "saqlain"
// console.log(myAnotherName)
// console.log(myName)

let userOne = {
    email : "usergoogle.com",
    upi : "user@bkl"
}

let userTwo = userOne

userTwo.email = "damn@gmail.com"

console.log(userOne.email)