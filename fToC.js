// Fahrenheit to Celsius

const output2 = document.getElementById("c-output");

const fahrenheitToCelsius = () => {
  const fValue = document.getElementById("f").value;
  if (!fValue) {
    output2.innerHTML = "Please enter a number";
  } else if (fValue) {
    let c = Math.floor(((fValue - 32) * 5) / 9);
    output2.innerHTML = `${fValue} degrees Fahrenheit is ${c} degrees Celsius`;
  }
};
