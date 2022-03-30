const myArray = [1,2,3,4];

// const newObjectIterator = {
//     values : myArray,

//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next: () => {
//                 i++;
//                 return {
//                     value: this.values[i - 1],
//                     done: i > this.values.length
//                 } 
//             }

//         }
//     }
// }


// console.log( myArray[Symbol.iterator]().next().value = myArray.reduce( ( accumulator, current ) =>  accumulator + current ) );

const myNewObjects = {
    values : myArray,
    // * => Generators
    *[Symbol.iterator]()  { 
       for(var i = 0; i < this.values.length; i++) {
            yield this.values[i];
       }
     }
}


for(let value of myNewObjects) {
    console.log(value);
}
console.log("Final SymbolIterator to Generator");

myArray.forEach( (result, index) => {
    console.log('Result with index: ', myArray[index], 'Result inside array: ', result );
});
console.log("Final Iterator forEach with Array");
