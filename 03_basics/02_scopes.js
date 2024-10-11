// let a = 10
// const b = 20
// var c = 40

{
     a = 100
    // b = 200
    c = 400
}

// console.log(a, b, c)

function one(){
    const a = 10
    // console.log(b)
    function two(){
        const b = 200
        console.log(a)
    }

    
    two()  
}

// one()


//This is a normal function
function one(num){
    return num + 1
}


//This is a expression
const addTwo = function(num) {
    return num + 2
}
