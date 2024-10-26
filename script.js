function appendNumber(userVal) {
  var inputVal = document.getElementById("display");
  inputVal.value += userVal;
}

function clearDisplay() {
  var inputVal = document.getElementById("display");
  inputVal.value = "";
}
function deleteLast() {
  var inputVal = document.getElementById("display");
  inputVal.value = inputVal.value.slice(0, -1);
}

function calculateResult() {
  var inputVal = document.getElementById("display");
  try {
    var result = eval(inputVal.value);
    inputVal.value = result;
  } catch {
    inputVal.value = "Error";
  }
}
