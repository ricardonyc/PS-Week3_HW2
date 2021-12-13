// 1. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
const largestNumOutput = document.getElementById("num-output");

function largestNum() {
  const numInput = document.getElementById("num-input").value;
  let newer = numInput.split(",").map((x) => Number(x));
  let newest = newer.reduce((a, b) => (a > b ? a : b));
  if (!numInput) {
    largestNumOutput.innerHTML = `Please enter a number :/`;
  } else {
    largestNumOutput.innerHTML = `The largest number is: ${newest}`;
  }
}




// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
//   ];

//   const shoppingSpree = (inWishlist) => {
//     const totalCost = inWishlist.reduce((a, b) => {
//       return a + b.price
//     }, 0);
//     return totalCost;
//   }

//   console.log(shoppingSpree(wishlist))