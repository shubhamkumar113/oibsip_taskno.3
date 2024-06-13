function convert() {
  var inputTemp = parseFloat(document.getElementById("inputTemp").value);
  var tempUnit = document.getElementById("tempUnit").value;
  var result;

  if (tempUnit === "celsius") {
    result = (inputTemp * 9/5) + 32;
    document.getElementById("result").innerHTML = inputTemp + " Celsius = " + result.toFixed(2) + " Fahrenheit";
  } else {
    result = (inputTemp - 32) * 5/9;
    document.getElementById("result").innerHTML = inputTemp + " Fahrenheit = " + result.toFixed(2) + " Celsius";
  }
}
