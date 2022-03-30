let myProp = "test";
let myPropTwo = "testTwo";

let myObject = {};

myObject[myProp] = "hello";
myObject[myPropTwo] = "helloTwo";

console.log("Object: ",myObject);

console.log("Properties: ", Object.keys(myObject) );

Object.keys(myObject).forEach(result => { console.log( result ) } );

function testingObjectLiterals( type = "default" ) {
    const newObject = {
        "maçã" : "this is good!",
        "pera" : "this is not good!", 
        "default" : "testting"
    }
    return ( newObject[type] );
}

console.log( testingObjectLiterals() );


