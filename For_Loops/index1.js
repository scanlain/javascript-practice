const CountryObj = {
    country : "Turkey",
    capital : "Ankara",
    code : "TKY",
    food : "Chai",
    isGood : true,
    phoneCode : 90
}

// for(let [key, ...value] in CountryObj ){
//     //console.log(CountryObj[obj])
//     console.log(`${key} => ${value}`)
// }
// c => o,u,n,t,r,y
// c => a,p,i,t,a,l
// c => o,d,e
// f => o,o,d
// i => s,G,o,o,d
// p => h,o,n,e,C,o,d,e

//We can't forof loop on objects

// for(let obj of CountryObj){
//     console.log(obj)
// }

//We can't iterate on maps using forin loop

const coding = ["java", "javascript", "html", "react", "css"]

// coding.forEach((item, index) => {
//     console.log(`${index} => ${item}`)
// })

function print(item){
    console.log(item)
}

// coding.forEach(print)