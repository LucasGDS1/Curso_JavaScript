/**
 * In the example, is approach the concept Hoisting created in ES6 2018.
 * Hoisting of Function, throw the function to up, before your declaration.
 * @author Lucas gabriel de souza 
 */

function myHoisting() {
    showLog("Hello Hoisting.");

    function showLog(information){
        console.log(information);
    }
}

myHoisting();