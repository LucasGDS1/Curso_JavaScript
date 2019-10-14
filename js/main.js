function clicar() {
    document.getElementById("paragrafo1").innerHTML = "Obrigado por clicar";
}

function novaPagina() {
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com";
}

function alterar(elemento) {
    //document.getElementById("paragrafo1").innerHTML = "Você passou o mouse";
    elemento.innerHTML = "Você passou o mouse";
}

function voltar(elemento) {
    //document.getElementById("paragrafo1").innerHTML = "Obrigado por clicar";
    elemento.innerHTML = "Obrigado por clicar";
}

function load() {
    alert("Bem vindo!");
}

function mostrarValor(elemento) {
    console.log(elemento.value);
}
//alert("Hello JavaScript");

var user = "Lucas";
var paise = "O Brasil é o melhor país do planeta";
var n1 = 4;
var n2 = 7;

var dicionario = ["Tipo", "Fruta", "Nome", "Maçã", "Cor", "Vermelha"];

var dicionarios = [{"Tipo":"Fruta", "Nome":"Maçã", "Cor":"Vermelha"},
                {"Tipo":"Fruta", "Nome":"Banana", "Cor":"Amarela"}];


dicionario.push("Natureza"); //insere uma palavra no final do array;
dicionario.pop(); //remove uma palavra do final do array;
dicionario.unshift("Árvore"); //insere uma palavra no começo do array;
dicionario.shift(); //remove uma palavra do final do array;
//alert("Bem vindo ao JavaScript " + user);

//console.log(paise);
//console.log(paise.replace("Brasil", "Russia")); //Replace substitui um elemento específico por outro;
//console.log(n1 + n2);
//console.log(paise.slice(0, 5));  //Slice define o ínicio e o fim de uma string que será mostrada;
//console.log(paise.toUpperCase());
//console.log(paise.toLowerCase());
//console.log(paise);
//alert(dicionario.Nome);
console.log(dicionario);
console.log(dicionario.join(" - ").toString()); //Join é utilizado como "separador" dos elementos;
console.log(dicionarios);


//var lerIdade = prompt("Dígite aqui a sua idade"); //Prompt, vai ler o valor que o usuário informar;

//Enquando o valor que o usuário dígitar for < 18, o navegador vai continuar solicitando que o usuário
//insira a sua idade;

/*
while(lerIdade <= 0 ) {
    var lerIdade = prompt("Dígite aqui a sua idade");
    validarIdade(lerIdade);
}*/

/*if(lerIdade >= 18) {
    alert("Maior de idade");
    
} else {
    alert("Menor de idade");
}*/

/*
var count;
for(count = 0; count <= 3; count++) {
    alert(count);
}*/

/*
function validarIdade(lerIdade){
    if(lerIdade >= 18) {
        return lerIdade = true;
    } else {
        return lerIdade = false;
    }
}

console.log(validarIdade(lerIdade));*/
