let d = new Date()

/*
Month are started from 0 in js
*/

// console.log(d) // 2024-12-11T00:51:35.666Z

// console.log(typeof d) //object

// console.log(d.toString()) //Wed Dec 11 2024 00:52:02 GMT+0000

// console.log(d.toDateString()) //Wed Dec 11 2024

// console.log(d.toISOString()) //2024-12-11T00:53:11.131Z

// console.log(d.toLocaleDateString()) // 12/11/2024 //MM-DD-YYYY

// console.log(d.toLocaleDateString('en-IN')) //11/12/2024 //DD-MM-YYYY

// console.log(d.toLocaleString('en-IN')) //11/12/2024, 12:55:39 am

// console.log(d.toLocaleTimeString('en-IN')) //12:56:22 am

// console.log(d.toTimeString()) //00:57:05 GMT+0000 (Coordinated Universal Time)

// console.log(d.toUTCString()) //Wed, 11 Dec 2024 00:57:38 GMT

// console.log(Date.now()) //1733879022532 //Total milliseconds from 1970
// console.log(new Date().getDate()) //11

//to convert milliseconds into seconds
// console.log(Math.floor(Date.now()/1000))

// let date = new Date().toLocaleString('default', {
//     weekday: "long",
//     timeStyle : "full",
//     dateStyle : "full"
// })

// console.log(date)
