//Q1
let number = prompt("Enter a random number");
if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}

//Q2
number = prompt("Enter a random number");
let message = (number > 90 && number < 110) ? "Bingo!": "Miss";
alert(message);

//Q3
let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);
