//iife is used to prevent the pollution that is caused by the global scope variables inside any functions. to avoid this iife are used to create their own scope where no one can interfere

//this is a named iife
(function chai(){
    console.log("chai is ready")
})();


//this is a simple iife
((name) => {console.log(`bring ${name} biscut`)})("marie")

//()() the first () is for declaration of the function and the () is for execution call 

//we need write ; at the end of IIFE to end the execution context or else if we have other iife after the first one the second one wont run

