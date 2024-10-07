function sayMyName(){
    console.log("Scanlain this side!!");
}

//sayMyName - > this gives reference of the function
//sayMyName() -> this gives the execution of the function

// console.log(sayMyName()) //gives undefined
// sayMyName(); 

//In js we dont need to define the datatype of the variable in function definition

function add(a, b){
    return a+b;
}

// console.log(add(5, 6))

function userMessage(message = "valid message"){
    if(!message){
        console.log("please enter a username!");
        return 
    }

    return `${message} has been sent`
}

console.log(userMessage());