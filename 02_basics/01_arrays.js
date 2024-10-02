let a = [1, 2, 4,5, 80]
let s = ["jethiya", "babita", "champak", "iyyer"]

let a2 = new Array(67, 87, 89)

s.push("daya")
// console.log(s)

s.pop()
// console.log(s)

s.unshift('mohanlal') //add elements at the start but is not efficient in case of big data arrays. thats we avoid to use .unshift()
// console.log(s)

s.shift()
// console.log(s)

// console.log(s.includes("babita")) //returns boolean value
// 
//returns index if present else returns -1

let newArr = s.join() // gives the array but converts the datatype to string
// console.log(newArr)

//slice and splice
/*
.slice() -> returns a piece of array between defined range where end index is excluded and keeping the original array unmodified
.splice() -> returns a piece of array between defined range where end index is included and the original array is modified
*/
let gokul = s.slice(0, 3)
// console.log(s)
// console.log(gokul)

// console.log(s)

let dham = s.splice(0, 3)
// console.log(dham)
// console.log(s)