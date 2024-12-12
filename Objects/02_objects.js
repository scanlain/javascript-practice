//create object using constructor

const cityInfo = new Object()

// console.log(typeof cityInfo) //object

cityInfo.name = "Amritsar"
cityInfo.state = "Punjab"
cityInfo.places = ["Golden Temple", "Wagha Border", "Jaliyanwala bagh"]
cityInfo.isGood = true

// console.log(cityInfo)

//when there are nested objects and we need to check if any property exists or not we use ? like user.name?.first_name

let obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}

let obj2 = {
    4 : "d",
    5 : "e",
    6 : "f",
}

//let obj3 = {obj1, obj2} //this won't merge the objects 

let obj3 = {...obj1, ...obj2} //using spread op //90% we will use this method
// console.log(obj3)

//another method to merge objects
// let obj4 = Object.assign( obj1, obj2) //here the merged result is stored in obj1 and then returned so it changes the obj1 

let obj4 = Object.assign({}, obj1, obj2)

// console.log(obj4)
// console.log(obj1)

// console.log(Object.keys(obj4)) //this returns an array of keys on which we can iterate using array methods

// console.log(Object.values(cityInfo)) //returns an array of values

// console.log(Object.entries(cityInfo)) //returns an array where each item will the key and its corresponding value

//if we want to check any propert exists in the object then we use
console.log(cityInfo.hasOwnProperty('places')) //true