let user = {
    city : "indore",
    age : 24,
    fullName : {
        firstName : "Tonny",
        lastName : "Stark"
    }
}

// console.log(user.fullName.firstName)
// console.log(user)

let obj1 = {1:"One", 2:"Two", 3:"Three"}
let obj2 = {4:"Four", 5:"Five", 6: "Six"}

// let mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)

// let obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)
// console.log(Object.keys(obj1)) //returns a array of keys
// console.log(Object.values(obj1)) //returns a array of values
// console.log(Object.entries(obj1)) //returns a array of array of each pair

// console.log(obj2.hasOwnProperty(5))

let course = {
    courceName : "Chai aur react",
    price : "999",
    instructor : "Hitesh"
}



// let {courceName, price, instructor} = course //This is called destructing
// console.log(instructor)     
// console.log(price)
// console.log(courceName)


let {courceName : name} = course // we can assign our own variables
// console.log(name)



