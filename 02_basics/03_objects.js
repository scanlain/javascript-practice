//Signleton : When object is create using a constructor Object.create()
//Object created by using literals are not singleton.

let mySym = Symbol("key1")

let jsUser = {
    name : "scanlain",
    age : 23,
    location: "Wakanda",
    isCorrect: false,
    [mySym] : "myKey1"
}

// console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser[mySym])

// jsUser.name = "ironMan"
// console.log(jsUser.name)

//If you want no one should override the values of object we can use
// Object.freeze(jsUser) //now we can't change the values of object

jsUser.location = "Johnpur"
// console.log(jsUser.location) //we wont get any error but the value won't change

// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`Hello , how are you ${this.name}`)
}

console.log(jsUser.greeting) //[Function (anonymous)] we get the refernce of the function
console.log(jsUser.greeting())
