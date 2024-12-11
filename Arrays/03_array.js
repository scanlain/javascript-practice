let nums = [1, 30, 109, 45, 99, 126, 567]

//filter
let filterNum = nums.filter((item) => item%2 !== 0)
// console.log(filterNum)
/*
What this method basically does this it takes an callback function as an argument which which be test each item of the array and whichever item is true for specified task in the callback that will be return into an new array. The original remains unmodified
*/

//find

let users = [
    {id:1, name:"ALice"},
    {id:2, name:"Bob"},
    {id:3, name:"Ali"},
    {id:4, name:"prince"}
]

let firstResult = users.find((user) => {
    return user.id == 3
}) 
// console.log(firstResult)
/*
what happens in this method is each item of an array which will be taken by the callback and whichever the first item satifies the condition will be returned and the excecution will be stopped, it won't further check for other items. If not item matches the condition, undefined will be returned
*/

//findIndex
/*
this method behaves same as .find() , just it returns the index of the first element that satifies the conidition rather than its value. If any element not satifies then -1 is returned
*/

//foreach

// nums.forEach((num, index) => console.log(`Element : ${num}, Index : ${index}`))
/*
foreach is simple method it basically iterates over all the elements of an array and performs the task given in  the callback. It doesn't return an array , but modifies the original array.
*/


//reduce

let prod = nums.reduce((acc, num) => {
    return acc *num
}, 1)
// console.log(prod)
/*
what this method does is it takes an accumalotor whose initial value we can give and for each item a task in performed whose result will be stored in acc and use it for next iteration. So finally we will get an single result that is acc which is returned. So in simple terms .reduce() reduces all the elements of the array into an single result
*/

//map

let resultArr = nums.map((num) => num*5)
// console.log(resultArr)
/*
what this method does is it iterates over the each item and performs the task in callback and the returns an new array with the result of each item performed. It doen't modify the original array.
*/

let keys = nums.keys()

// for(let key of keys){
//     console.log(key)
// }

/*
this method returns an iterable array object of keys of the array(index) over which we can iterate 
*/

let values = nums.values()
// for(let val of values){
//     console.log(val)
// }

/*
Same as .keys() , just in .values() it returns an iterable object of values of the array.
*/

//flatMap

let phrases = ["hello world", "", 'flatmap is great']
let words = phrases.flatMap((phrase) => phrase.split(' '))
// console.log(words)

/*
The flatMap() method in JavaScript is a combination of two methods: map() and flat(). It is used to apply a callback function to each element of an array, and then flatten the resulting arrays into a single, new array. The flattening happens only one level deep.
*/
