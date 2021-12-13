// Fahrenheit to Celsius

const celsiusOutput = document.getElementById("c-output");

const fahrenheitToCelsius = () => {
  const fValue = document.getElementById("f").value;
  if (!fValue) {
    celsiusOutput.innerHTML = "Please enter a number :[";
  } else if (fValue) {
    const c = Math.floor(((fValue - 32) * 5) / 9);
    celsiusOutput.innerHTML = `${fValue} degrees Fahrenheit is ${c} degrees Celsius`;
  }
};
 