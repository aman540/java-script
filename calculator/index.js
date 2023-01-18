let num1 = 8
let num2 = 19
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2
display = document.getElementById("sum-el")

function sum() {
    let total = num1 + num2;
    display.innerText = total;

}

function minus() {
    let total = num1 - num2;
    display.innerText = total;

}

function prod() {
    let total = num1 * num2;
    display.innerText = total;

}

function div() {
    let total = num1 / num2;
    display.innerText = total;

}