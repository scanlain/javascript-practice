/*
- whenever we write "use strict" the code it will be treated as newer version of javascript
- javascript engine is hidden in the browser
*/

// alert("Kya re bhikmangya") //this will give error as we are using node.js and not browser

// console.log("Yeah"); console.log("buddy") //this will work but it not a good practice to write

//bigint

/*
-null :  is a datatype too but a standalone value
-undefined :   when a value is not assigned to a variable
-symbol : mostly used in react while creating components 
*/

let name = "babuchak" //string
let age = 34 //number => 2 to 2 power 53
let isSleeping = true //boolean
console.log(typeof isSleeping)

let types = [name, age, isSleeping].map(item => typeof item)
console.log(types)

console.log(typeof null) //object
console.log(typeof undefined) //undefined

console.log(Object.prototype.toString.call(null)); // "[object Null]"

/*
    The working of the above function is we know that .toString() gives us the string representation. When we pass a value to .call()[used to set the value explicitly] that value has an internal property [[Class]] which tells the type of the object and return its actual type
*/
