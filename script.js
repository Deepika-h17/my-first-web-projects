function add() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (n1 + n2);
}