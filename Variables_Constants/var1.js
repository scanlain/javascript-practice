const gameName = "Valorant"
let agent = "Omen"
var map = "Icebox"
username = "babuchak" //dont use this way to declare variable, as it is not a good practice
let bundle

// gameName = "GTA5"
// console.log(gameName) //gives error as const vars can be modified once defined and initialized

agent = "Sage"
console.log(agent)

map = "Bind"
console.log(map)

username = "scanlain"
console.log(username)

console.log(bundle) // undefined as it is not initialized

console.table([gameName, agent, map, username]) // gives a tabular format of var name and their values

/*
- variables can be defined using let and var, but avoid using var because of its block scope issues. So we use 99% of time only const and let

- By default the value of an variable if not initialized is "undefined"
*/

function test(){
    console.log(v);
    // console.log(c); //Gives ReferenceError
    // console.log(l); //Gives ReferenceError

    var v = 10;
    let l = 20;
    const c = 50;
}

test();

/*
- when we use a variable before its declaration and later declare using var then it shows "undefined" bydefault. This Concept is called "Hoisting"

- when we use a variable before its declaration and later declare using let then it shows "ReferenceError"

- when we use a variable before its declaration and later declare using const then it shows "ReferenceError"
*/

if(true){
    var name = "scanlain"
    let country = "Turkey"
    const gender = "male"
}

console.log(name)
// console.log(country) //Gives ReferenceError
// console.log(gender)  //Gives ReferenceError

/*
- The reason we avoid using var is that when a variable is declared inside any scope using "var" then it is acccesible outside the scope which is not good , but in case of "let" and "const" we can't access the variable outside the scope which maintains an integrity and security.
*/

let hero = "ironman"
var movie = "Interstellar"

if(true){
    hero = "captainamerica"
    movie = "Friends with benefits"
}

console.log(hero)
console.log(movie)

console.log(series);

function test2(){
    var series = "dark" //Gives ReferenceError
}
var series = "alone"
test2()

/*
- here what happens is when I accesed a variable and  declared an variable using "var" inside a function it gave me an error, but when I declared it globally it showed "undefined". So when we declare an variable inside an funciton using "var" initially it is not hoisted.
*/

var city = "mumbai"
var city = "indore"

console.log(city)

// let state = "Jammu" 
// let state = "Punjab" // gives Syntax Error

const weather = "cold"
// const weather = "hot" // gives Syntax Error



/*
- When we declare 2 variables with same name using "var" it overrides the value of previous one
- While "let" and "const" doesn't allow us to declare 2 variables with same name 
*/

var gf = "lara"
let hobby = "reading"

if(true){
    gf = "sofie"
    hobby = "gaming"
}

console.log(gf)
console.log(hobby)