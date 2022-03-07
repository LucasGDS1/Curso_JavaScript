function getInformation() {
    let infoOfUser = document.getElementById('information').value;
    findOperator(infoOfUser);
}

function findOperator(parameter) {
    let operator = "";

    for(let index of parameter) {
        if(index == "+") {
            operator = index;
        } else if( index == "-") {
            operator = index;
        } else if( index == "*") {
            operator = index;
        } else if( index == "/") {
            operator = index;
        }
    }
    
    calculator( operator, parameter.split(operator) );
}

function calculator(operation, parameters) {

    let calculating = {
        "+" : Number(parameters[0]) + Number(parameters[1]),
        "-" : Number(parameters[0]) - Number(parameters[1]),
        "*" : Number(parameters[0]) * Number(parameters[1]),
        "/" : Number(parameters[0]) / Number(parameters[1]),
        "default" : 'No given finded for calculator. Please digit values númerics with the operator.'
    }
    let result = ( calculating[operation] || calculating["default"] );
    validationReturnNumberZero(calculating) == true ? assembleResult( 0 ) : assembleResult( result );
}

function validationReturnNumberZero(result) {
    if(result["+"] == 0 || result["-"] == 0 || result["*"] == 0 || result["/"] == 0) {
        return true;
    }
}

function assembleResult(result) {
    if( typeof(result) == "string" ) {
        alert( result );
        document.getElementById('information').textContent = "";
        document.getElementById('result').textContent = "";
    } else {
        document.getElementById('result').textContent = result;
    } 
}

