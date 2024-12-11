let arr1 = ["gta5", "valorant", "RDR2", "LastOfUs", "Spiderman"]
let arr2 = ["pubg", "cod", "COC", "candy crush", "Dr.Driving"]

// arr1.push(arr2)
// console.log(arr1) 
/*
  [
  'gta5',
  'valorant',
  'RDR2',
  'LastOfUs',
  'Spiderman',
  [ 'pubg', 'cod', 'COC', 'candy crush', 'Dr.Driving' ]
]
*/

let arr3 = [...arr1, ...arr2] //spread operator
// console.log(arr3)

let arr4 = [1, 2, 3, 4, 5, [9, 8, [3, 4, 5]]]
let arr5 = arr4.flat(2) //here we can specify the number of level it should open, by default it is 1, Infinity will open all the sub arrays inside it and make it a single array
// console.log(arr5)

// console.log(Array.isArray(arr5)) //true
// console.log(Array.isArray("Valorant")) //false
/*
checks whether the provided object is array or not
*/


let arr6 = Array.from("LASTOFUS")
// console.log(arr6)
/*
Converts the given object into an array
*/

let score1 = 100
let score2 = 200
let score3 = 300

let arr7 = Array.of(score1, score2, score3)
// console.log(arr7) //[ 100, 200, 300 ]
/*
this method converts the given set of elements into an array
*/

