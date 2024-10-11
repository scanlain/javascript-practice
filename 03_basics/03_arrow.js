const user = {
    username : "scanlain",
    price : 999,

    greeting:function(){
        console.log(`${this.username}, welcome to website!!`)
        console.log(this) //gives the info about the current context
    }
}

// user.greeting()

// user.username = "tony stark"

// user.greeting()

// console.log(this) //this gives an empty object as we are referring to the node env
//but we when run the same code in browser's console it gives us a window object 

function vada(){
    let username = "scanlain"
    console.log(this.username) //we can't use this inside an function 
}

// vada()

const idli = (plate) => {
    console.log(`The order is ${plate} idli`)
    console.log(this.plate) // In arrow function also we can't use this keyword as it doesn't refer to the current context
    console.log(this) //gives an empty object
}

// idli(3)

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3, 8))

//in this method when there is a single line of code we can skip the return keyword and parenthesis
//this is also called as implicit return

// const mul = (n1, n2) =>  n1 * n2

//we can also write the arrow function in this way
const mul = (n1, n2) => (n1 * n2) 


//return and curly braces will come together

// console.log(mul(5, 10))


//this is how we return an object using arrrow function
const obj = () => ({username : "scanlain"})

console.log(obj())