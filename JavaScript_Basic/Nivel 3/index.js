
//Declaracion de variables
var num1 = 0;
var num2 = 0;
var opera;
 //Función que coloca el número presionado
function darNumero(numero){
if(num1==0 && num1 !== '0.'){
    num1 = numero;
}else{
    num1 += numero;
}
display();
}

//Función que coloca la coma al presionar dicho botón
function darComa(){
if(num1 == 0) {
    num1 = '0.';
} else if(num1.indexOf('.') == -1) {
    num1 += '.';
}
display();
}

//Función que coloca la C al presionar dicho botón
function darC(){
num1 = 0;
num2 = 0;
display();
}
//Función que borra el último dígito
function darBorrar(){
num1 = parseFloat(document.getElementById("valor_numero").value);
num1 = num1.toString().slice(0,-1);
if(num1==""){
    num1=0;
}
display();
}
    

//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor){
if (num1 == 0){
    num1 = parseFloat(document.getElementById("valor_numero").value);
}
num2 = parseFloat(num1);
num1= 0
opera = valor;
}

//Función para pulsar igual

function esIgual(){
num1 = parseFloat(num1);
switch (opera){
    case "+":
        num1 += num2;
    break;
    case "-":
        num1 = num2 - num1;
    break;
    case "*":
        num1 *= num2;
    break;
    case "/":
        num1 = num2 / num1;

    break;
}
display();
num2 = parseFloat(num1);
num1 = 0;
}

function display(){
document.getElementById("valor_numero").value = num1;
}