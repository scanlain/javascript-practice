let kills = "23"

// console.log(kills, typeof kills)

let numberKills = Number(kills)

// console.log(numberKills, typeof numberKills)

let str = "23abc"
let num = Number(str)
// console.log(num) //NaN(Not A Number)

let other = null
let change = Number(other)
// console.log(change) //gives 0

let hi;
let hello = Number(hi)
// console.log(hello) //NaN

let b = true
let n = Number(b)
// console.log(n)

let game = "valorant"
let g = Number(game)
// console.log(g) //NaN

//When we use Number() for conversion
/*
"23" => 23
"23abc" => NaN
null => 0
undefined => NaN
true/false => 1/0
"valorant" => NaN
*/

let s = ""
let b1 = Boolean(s)
// console.log(b1) //false

let s2 = "gta"
let b2 = Boolean(s2)
// console.log(b2) //true

let s3 = null
let b3 = Boolean(s3)
// console.log(b3) // false

let s4;
let b4 = Boolean(s4)
// console.log(b4) //false

//When we use Boolean() for conversion
/*
"" => false
"gta" => true
null => false
undefined => false
*/

let some = 23
let st1 = String(some)
// console.log(st1) //23 but type is string

let a = true
let st2 = String(a)
// console.log(st2) //true

let a1 = null
let st3 = String(a1)
// console.log(st3) //true

let a2 = undefined
let st4 = String(a2)
// console.log(st4) //undefined

//When we use String() for conversion
/*
 23 => 23 type string
 true => true
 null => null
 undefined => undefined
*/

// console.log(2**4);

let str1 = "valorant"
let str2 = "omen"
let str3 = str1 + str2
// console.log(str3)
// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2")

// console.log(+true) //1
// console.log(+"") //0
// console.log(+"gta5") //NaN
//+ converts into numeric but not recommended

// let num1,num2, num3
// num1 = num2 = num3 = 40
// console.log(num1, num2, num3)

