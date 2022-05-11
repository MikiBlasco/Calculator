let resultBox = document.getElementById('result');

let grill = document.getElementById('grill');


//nums
let b1 = document.getElementById("1");
let b2 = document.getElementById("2");
let b3 = document.getElementById("3");
let b4 = document.getElementById("4");
let b5 = document.getElementById("5");
let b6 = document.getElementById("6");
let b7 = document.getElementById("7");
let b8 = document.getElementById("8");
let b9 = document.getElementById("9");
let b0 = document.getElementById("0");
//operations
let bp = document.getElementById("+");
let bm = document.getElementById("-");
let bx = document.getElementById("x");
let bd = document.getElementById("/");
//other
let bc = document.getElementById("c");
let be = document.getElementById("=")

const numArr = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b0];
const opeArr = [bc, bp, bm, bx, bd];

let num1;
let num2;
let operator = "-";
let result = 0;
let screen;


numArr.forEach( el => {
    el.onclick = function () {

        if(!num1){
            num1 = el.value;
            resultBox.innerHTML = num1;
        } else {
            num2 = el.value;
            resultBox.innerHTML += num2;
        }       
    }       

});

opeArr.forEach( el => {
    el.onclick = function () {
        operator = el.value;
        resultBox.innerHTML += operator;
    }   
});

bc.onclick = function () {
    num1 = undefined;
    resultBox.innerHTML = 0;
}

be.onclick = function () {

    switch(operator){
        case "+":
        result = parseFloat(num1) + parseFloat(num2);
        break;
        case "-": 
        result = num1 - num2;
        break;
        case "x": 
        result = num1 * num2;
        break;
        case "/": 
        result = num1 / num2;
        break;
    }

    resultBox.innerHTML = result; 
    num1 = undefined;   
}

