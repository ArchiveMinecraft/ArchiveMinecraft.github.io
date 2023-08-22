let currentInput = '0';
let operator = '';
let previousInput = '';

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function appendNumber(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  operator = op;
  previousInput = currentInput;
  currentInput = '0';
}

function clearDisplay() {
  currentInput = '0';
  operator = '';
  previousInput = '';
  updateDisplay();
}

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = (num1 / num2).toString();
      break;
  }

  operator = '';
  previousInput = '';
  updateDisplay();
}
