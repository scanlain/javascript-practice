const nums = [2, 3, 4, 89, 100, 45, 67, 23]
// const newNums = nums.filter((item) => (item > 20))
// console.log(newNums)

// const mapNums = nums.map((item, index) => [index, item])
// console.log(mapNums)

const result = nums.reduce((item, acc) => (
     
    item*acc
), 1)

console.log(result)

