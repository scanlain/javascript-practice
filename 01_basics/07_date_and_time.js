let d = new Date()
// console.log(d)                          //2024-10-02T06:34:16.058Z

// methods marked with //* give a proper and understable time date and time format.
// console.log(d.getMonth())                  //9 because January denotes 0
// console.log(d.getDate())                //2
// console.log(d.getDay())                 //3
// console.log(d.getFullYear())            //2024
// console.log(d.toString())               //Wed Oct 02 2024 06:37:14 GMT+0000 (Coordinated Universal Time)
// console.log(d.toDateString())           //* Wed Oct 02 2024
// console.log(d.toISOString())            //2024-10-02T06:38:05.225Z
// console.log(d.toJSON())                 //2024-10-02T06:38:22.511Z
// console.log(d.toLocaleDateString())     //* 10/2/2024
// console.log(d.toLocaleString())         //* 10/2/2024, 6:39:51 AM
// console.log(d.toLocaleTimeString())     //* 6:40:19 AM
// console.log(d.toTimeString())           //06:40:39 GMT+0000 (Coordinated Universal Time)
// console.log(d.toUTCString())            //Wed, 02 Oct 2024 06:41:10 GMT

// console.log(typeof d)

//Here counting starts from 0 i.e January

console.log(d.toLocaleString('default', {
    weekday:'short',
    day:'2-digit'
}))