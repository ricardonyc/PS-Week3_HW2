// 4. Traverse through an array (either number or string array) and display each value with their index position using Array.map method

// HINT: For index, take a look at the Syntax and Parameters sections in the MDN Doc (Links to an external site.) for Array.map

// get an array (numbers or strings)
// display each value with their index

const mapOutput = document.getElementById("map-output");

const display = () => {
  const userInput = document.getElementById("map").value;
  if (!userInput) {
    mapOutput.innerHTML = "Give some input :(";
  } else {
    const newArray = userInput
      .split(",")
      .map((x, index) => ` "${x}" is at index ${index}`);
    mapOutput.innerHTML = newArray;
  }
};
