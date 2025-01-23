let currentNumber = '';
let previousNumber = '';
let operation = null;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = currentNumber || '0';
}

function appendNumber(number) {
  if (currentNumber.length >= 12) return; // Limit to 12 digits
  currentNumber += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    updateDisplay();
  }
}

function chooseOperation(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    compute();
  }
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Error';
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operation = null;
  previousNumber = '';
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  updateDisplay();
}
