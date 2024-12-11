let myArr = ["amritsar", "indore", "hampi", "landour"]

//Study Later methods : find, findIndex, Some, Flat, map, Filter, Reduce, Sort



// console.log(myArr)

// console.log(myArr.length) //4

myArr.push("lahore") //pushes the item at the end of array
// console.log(myArr)

myArr.pop() //removes the last item
// console.log(myArr) 

myArr.unshift("varanasi") //adds the item to the start of the array
// console.log(myArr)
/*
what happens here is when the value is added at the start all other items are shifted so imagine there is thousands of items and shifting them we create a load on system
*/

myArr.shift() //removes the first item
// console.log(myArr)

// console.log(myArr.includes("indore")) //true

// console.log(myArr.indexOf("hampi")) //2

let str = myArr.join() //returns a string which joins all the items
// console.log(str) 
// console.log(typeof str)

let sliceArr = myArr.slice(1, 3)
// console.log(sliceArr)
// console.log(myArr)
/*
In slice it returns an array in range of start to end-1 without modifying the original array
*/

// let spliceArr = myArr.splice(0,2)
// console.log(spliceArr)
// console.log(myArr)
/*
In splice it returns an array from the start index and specifies the count of elements to be deleted and modifies the original array
*/

// console.log(myArr.at(-1)) //returns the string at given index , also takes -ve index

// console.log(myArr.concat(["India", "Turkey", "Vietnam"])) //this mehtod returns a new array concatinating the given elements without modifying the original array

// let arr1 = myArr.copyWithin(0,2,4)
// console.log(arr1)
// console.log(myArr)
/*
The copyWithin() method in JavaScript is used to copy a portion of an array to another location within the same array, without changing the array's length. It operates in-place, meaning it modifies the original array.
*/

// console.log(myArr.fill("jammu", 1,4)) //[ 'amritsar', 'jammu', 'jammu', 'jammu' ]
/*
It copies the value and repeats within the range of start to end by modifying the original array
*/

// console.log(myArr.reverse()) //reverses the original array




