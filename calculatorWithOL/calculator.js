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
    
    if( operator == "") return;
    calculator( operator, parameter.split(operator) );
}

function calculator(operation, parameters) {

    let calculating = {
        "+" : parameters.reduce( (accumalator, current) => Number(accumalator) + Number(current) ),
        "-" : Number(parameters[0]) - Number(parameters[1]),
        "*" : Number(parameters[0]) * Number(parameters[1]),
        "/" : Number(parameters[0]) / Number(parameters[1]),
        "default" : 'No given finded for calculator. Please digit values númerics with the operator.'
    }
    calculating[operation] == 0 ? assembleResult( 0 ) : assembleResult( ( calculating[operation] || calculating["default"] ) );
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

