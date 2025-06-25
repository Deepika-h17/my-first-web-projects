function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers!";
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? (num1 / num2) : "Can't divide by 0!";
        break;
      default:
        result = "Invalid operation";
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
}