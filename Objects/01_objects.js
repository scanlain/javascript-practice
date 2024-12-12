//singleton object - When we create a object using constructor Object.create()
//When we create using literal that objects are not singleton

//object literal

let sym = Symbol("mykey1")

let user = {
    name : "Tommy Shelby",
    [sym] : "mykey1",
    series : "Peaky Blinder",
    country : "UK",
    rating : 9.6,
    isAir : false,
    "platform on" : ["neflix", "amazon prime"]
}

//Behind the scenes the keys are also stored as strings that is why when we access using [] we give the name of the key in string

// console.log(user.name)
// console.log(user["series"])
// // console.log(user[2]) //not working
// console.log(user["platform on"]) //here we can't access using .
// console.log(user[sym])

//when we give the symbol key as [sym] in the object it shows as a symbol in output but when we declare just as a sym it shows just  a normal key
// console.log(user)

user.rating = 9.8

// console.log(user.rating)

//To restrict the changes to be done on the object we use
// Object.freeze(user)
user.country = "Denmark"
// console.log(user.country) //see even though we altered the value it didn't reflect as we haved freezed the object

user.getReview = function(){
    console.log("The series is very good, I would recommend everyone to watch it")
}

// console.log(user)
// console.log(user.getReview) //[Function (anonymous)] //it returns  the reference of the function but does not execute it
// console.log(user.getReview()) //The series is very good, I would recommend everyone to watch it

user.getSeriesName = function(){
    console.log(`The name is ${this.name}`)
}

user.getSeriesName()




