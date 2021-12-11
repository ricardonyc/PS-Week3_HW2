// 2a. Create a function called celsiusToFahrenheit:
// - Take a Celsius temperature from the user and convert it to Fahrenheit
// - Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"

const output = document.getElementById("f-output");

const celsiusToFahrenheit = () => {
  const celsiusValue = document.getElementById("c").value;
  if (!celsiusValue) {
    output.innerHTML = `Please enter a number`;
  } else if (celsiusValue) {
    output.innerHTML = `${celsiusValue} degrees Celsius is ${Math.floor(
      (celsiusValue * 9) / 5 + 32
    )} degrees Fahrenheit`;
  }
};
