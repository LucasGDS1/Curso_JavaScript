/**
 * In the example, is approach the concept Currying created at ES6 2018
 * Currying is one manner for creating an memorization 
 * @author lucas gabriel de souza
 */

function myCurrying(firstParameter) {
    return function myResult(secondParameter) {
        return firstParameter + secondParameter;
    }
}

const memorization = myCurrying(3);

console.log(memorization(2));
console.log(memorization(3));
console.log(memorization(4));



