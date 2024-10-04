let marvel = ["ironman", "spiderman", "hulk", "wanda"]
let dc = ["superman", "batman", "flash", "wonderwoman"]

// marvel.push(dc)
// console.log(marvel) 

// let collab = marvel.concat(dc)
// console.log(collab)

//mostly to merge multiple arrays we use spread operator.
let together = [...marvel, ...dc]
// console.log(together)

let arr1 = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10, 11]]]]
// console.log(arr1)

let arr2 = arr1.flat(Infinity)
// console.log(arr2)

// console.log(Array.isArray(marvel))

let status = "I'm a skilled frontend developer "
// console.log(Array.from(status))

//Array.of() -> returns a new array from set of elements
