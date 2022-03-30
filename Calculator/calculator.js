let data = "";

document.getElementById("operations").addEventListener('change', function() {
    
    if( document.getElementById("Addition").checked ) {
        assembleData('+');
    } else if ( document.getElementById("Multiplication").checked ) {
        assembleData('*');
    } else if ( document.getElementById("Division").checked ) {
        assembleData('/');
    } else if ( document.getElementById("Substract").checked ) {
        assembleData('-');
    }
});

function assembleData(operator) {
    data = document.getElementById("data").value + operator;
    document.getElementById("data").value = "";
}

document.getElementById("calculator").addEventListener('click', function() {
    let dataCalculation = data + document.getElementById("data").value;
    document.getElementById("result").textContent = eval( dataCalculation );
});

