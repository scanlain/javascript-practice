const course = {
    courseName : "Chair aur react",
    price : "$1299",
    rating : 4.7,
    instructor : "Hitesh Choudhary"
}

//Destructuring
const {courseName, price, instructor : inst} = course
console.log(courseName, price, inst)