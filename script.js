var operation=prompt("Enter the operation (sum, sub, div, mul, mod):");
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function mul(a, b) {
    return a * b;
}
function mod(a, b) {
    return a % b;
}
var num1=parseInt(prompt("Enter the first number:"));
var num2=parseInt(prompt("Enter the second number:"));
var result;
if (operation === "sum") {
    result = sum(num1, num2);
} else if (operation === "sub") {
    result = sub(num1, num2);
} else if (operation === "div") {
    result = div(num1, num2);
} else if (operation === "mul") {
    result = mul(num1, num2);
} else if (operation === "mod") {
    result = mod(num1, num2);
} else {
    result = "Invalid operation";
}
console.log("Result:", result);
