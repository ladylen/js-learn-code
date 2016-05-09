var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var n1 = parseFloat(numOne.value) || 0;
  var n2 = parseFloat(numTwo.value) || 0;
  //console.log(n1);
  addSum.innerHTML = "Sum: " + (n1+n2);
}