(function(username){
    console.log("This is an IIFE")
    // console.log(this.username) //here too this can be used to refer function members
    // console.log(this) //here this refers to current function
})("omen");

//when we write 2 iife's we need to write ; by ourself

(() => {
    console.log("This is 2nd IIFE")
})();

//if we won't put ; at the end the iife function won't run , new editors put the ; automatically now-a-days

//IIFE is used to reduce the global scope pollution

//()() - first () for function definition and () is for execution