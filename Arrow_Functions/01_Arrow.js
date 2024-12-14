const user  = {
    userName : "Tony Stark",
    age : 54,
    greeting : function(){
        console.log(`Welcome ${this.userName} to our hotel`)
        console.log(this)
    }
}

// console.log(this) //this is empty because we are inside node env and node env this refers to an empty object

// user.greeting()

// user.userName = "Captain America"

// user.greeting()

function code(){
    let name = "tommy"
    console.log(this) // it refers to current function
    // console.log(this.name) //here it is proved that this can't be used to refer any variables inside an function and  works only for objects and
}

// code()

const rover = () => {
    console.log(this) //here it refers to an empty object
}

// rover()

const returnObj = () => ({name:"shelby", age:24, city:"gotham"})
// console.log(returnObj())

//In arrow functions while returning any value if we use {} then we must write return keyword , but we use () or just write simple statement then dont need to write return

const way1 = (n1, n2) => {
    return n1 + n2
}
// console.log(way1(3,4))

const way2 = (n1, n2) => n1 + n2
// console.log(way2(8, 9)) 

const way3 = (n1, n2) => (n1 + n2)
// console.log(way3(8, 6))
