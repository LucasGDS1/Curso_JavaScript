let myObject = {
    teste : "testando"
};

console.log(myObject);

let mySecondObject = {
    teste : "testtingOne",
    testeTwo: "testtingTwo"
}

mySecondObject.firstObject = {...myObject};

console.log(mySecondObject);