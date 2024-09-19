const display = document.getElementById("display");
const buttons = document.querySelectorAll(".numb");
const clearButton = document.querySelector(".ac");
const deleteButton = document.querySelector(".del");
const equalButton = document.querySelector(".equal");
const themeToggle = document.getElementById("checkbox");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText === "." && currentInput.includes(".")) return;
        if (["+", "-", "*", "/", "%"].includes(button.innerText)) {
            if (currentInput === "") return;
            if (previousInput !== "") {
                calculate();
            }
            operator = button.innerText;
            previousInput = currentInput;
            currentInput = "";
        } else {
            currentInput += button.innerText;
        }
        updateDisplay();
    });
});




clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
});

deleteButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

equalButton.addEventListener("click", () => {
    if (currentInput && previousInput) {
        calculate();
        updateDisplay();
    }
});

function updateDisplay() {
    display.innerText = previousInput + ' ' + operator + ' ' + currentInput || "0";
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "*":
            computation = prev * current;
            break;
        case "/":
            computation = prev / current;
            break;
        case "%":
            computation = prev % current;
            break;
        default:
            return;
    }

    currentInput = computation.toString();
    previousInput = "";
    operator = "";
}

themeToggle.addEventListener("change", () => {
    document.body.toggleAttribute("data-theme-dark");
});


deleteButton.addEventListener("click", () => {
  currentInput = ""; 
  updateDisplay();
});


