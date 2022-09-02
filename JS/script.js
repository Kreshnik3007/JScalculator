
let input = document.getElementById("result");

let number = document.getElementsByClassName("button");
//console.log(number.length)
for (let i = 0; i < number.length; i++) {
    //console.log(i)
    number[i].addEventListener("click", calculate);
}

let firstNumber
let secondNumber
let sign
let sqrt

function calculate(event) {
    let button = event.target.innerHTML
    switch (button) {
        case "C":
            input.value = "0";
            break;
        case "x":
            firstNumber = input.value;
            input.value = "0";
            sign = "x";
            break;
        case "sum":
            //let arrayOfNumbers = input.value.split(",")
            //console.log(arrayOfNumbers);
            if (sign = "sum") {
                let arrayOfNumbers = input.value.split(",").map(x => Number(x))
                let sum = 0;
                arrayOfNumbers.forEach(x => sum = sum + x);

                input.value = sum;
            }
            break;
        case "=":
            secondNumber = input.value;
            if (sign == "x") {
                input.value = firstNumber * secondNumber
            }
            if (sign == "+") {
                input.value = firstNumber * 1 + secondNumber * 1
            }
            if (sign == "-") {

                input.value = firstNumber - secondNumber * 1
            }
            if (sign == "/") {
                input.value = firstNumber / secondNumber
            }
            break;
        case "+":
            firstNumber = input.value;
            input.value = "0";
            sign = "+";
            break;
        case "-":
            firstNumber = input.value;
            input.value = "0";
            sign = "-";
            break;
        case "/":
            firstNumber = input.value;
            input.value = "0";
            sign = "/";
            break;
        default:
            if (input.value == 0) {
                input.value = button;
            }
            else {
                let previousbutton = input.value + button
                input.value = previousbutton;
            }

    }




}



