function add(num1=10, num2=10){ //these are parameters inside the ()
    return num1 + num2

}

// console.log(add(1,"8")) //these are the arguments inside () which we pass to a funtion

const result = add() //function returns an value
// console.log(result)

function user(username="none"){
    return `${username} just logged in`
}

// const username = user("scanlain")
const username = user()
// console.log(username)

function manyNums(val1, val2, ...nums){
    return nums
}

// console.log(manyNums(400, 200, 400, 1000))

let a = 100 
var b = 90

// if(true){
//     let a = 50
//     console.log("inner a : ", a)
//     var b = 900
//     console.log("inner b : ", b)
// }

// console.log("outer a : ", a)
// console.log("outer b : ", b)


function outer(){
    let username = "scanlain"

    function inner(){
        let game = "GTA5"
        console.log(username)
    }
    inner()
    console.log(game)
}

// outer()

// if(true){
//     let country = "turkey"

//     if(true){
//         let city = "Istanbul"
//         console.log(country + city)
//     }

//     // console.log(city)
// }

// console.log(country)


// console.log(addFun(8)) //this is will an error
let addFun = function(num){
    return num+1
}

// console.log(addTwo(7))
function addTwo(num){
    return num*9
}

//Above both are functions then too they are behaving differently because the first is an function expression where the function is stored in an variable and in the second one it is normal function. Here comes the concept of hoisting

