// 2a. Create a function called celsiusToFahrenheit:
// - Take a Celsius temperature from the user and convert it to Fahrenheit
// - Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"

const fOutput = document.getElementById("f-output");

const celsiusToFahrenheit = () => {
  const celsiusValue = document.getElementById("c").value;
  if (!celsiusValue) {
    fOutput.innerHTML = `Please enter a number :-(`;
  } else if (celsiusValue) {
    const f = Math.floor((celsiusValue * 9) / 5 + 32)
    fOutput.innerHTML = `${celsiusValue} degrees Celsius is ${f} degrees Fahrenheit`;
  }
};
 


