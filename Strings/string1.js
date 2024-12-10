const game = "Valorant is a fun game"
const kills = 23;

// console.log(game+kills+":omen")

//String Interpolation (backticks)
// console.log(`I play ${game} and have ${23} kills `)

const game2 = new String("GTA")
// console.log(game2.length)

let str1 = game.toUpperCase()
// console.log(str1, game)

let index = game.charAt(3)
// console.log(index)

let i = game.indexOf('t')
// console.log(i)

let str3 = game.substring(1, 5)
// console.log(str3)
/*
returns the string from start to end-1 index
substring() doesn't take -ve values
*/

let str4 = game.split(' ')
// console.log(str4) //returns an array of strings

let ch = game.at(9)
// console.log(ch) //retuns char present at given index , if not returns undefined

let str5 = game.concat(" and my favourite agent is omen")
// console.log(str5) //returns a new concatenated string

let isEnds = game.endsWith("me")
// console.log(isEnds) //returns boolean and checks whether the string ends with given string paramter

let isPresent = game.includes("sage")
// console.log(isPresent) //returns boolean and checks whether the given string is present or not

let str6 = game.padEnd(40,'@')
// console.log(str6) //pads the given string at the end if the original string or char till the string reaches the given length, if the length of string is more than the given length, nothing happens

//same with padStart just pads at the start of the string

let str7 = game.repeat(3)
// console.log(str7) //gives the repeated string of count

let str8 = game.replace('Valorant', 'GTA5')
// console.log(str8) //replaces the search string with the passed string

let str9 = game.slice(1,7)
// console.log(str9) //returns a new string from start to end-1 index
/*
here we can give -ve values but slice works only in forward direction , so we can't give it in reverse direction.
*/ 

/*
    .toLowerCase() and .toUpperCase() are easy they just return a new string in lower and upper case
*/

let str10 = game.valueOf()
// console.log(str10)
/*
so what this method does if we create a string using let or const keyword it creates a primitve type of string and using new keyword it creates a object type . So basically it returns a primitve type of string
*/

let myName = "Tonny Stark" //string
let comp = new String("Avengers") //object
// console.log("myname : ", typeof myName)
// console.log("comp : ", typeof comp)

let news = "     If you don't let me blow how can you accept me to grow              "
let newstr = news.trim()
// console.log(newstr) //returns a new string with removed whitespaces
/*
    .trimStart() and .trimEnd() removes the leading and lagging whitespaces
*/

