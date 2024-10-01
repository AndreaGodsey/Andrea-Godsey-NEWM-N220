const num1 = document.getElementById
("num1");

const num2 = document.getElementById
("num2");

//Const helps call these variables. Get Element calls what is in parenthesis. These are reference variables.

//Create a reference variable for the output
const output = document.getElementById
("output");

//Function for adding the 2 numbers Parsefloat makes the numbers actually add together! Not the strings!
function addNums() {
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    output.innerHTML = sum;
}

function timesNums(){
    const product = parseFloat(num1.value) * parseFloat(num2.value);
    output.innerHTML = product;
}