// 1. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (num1, num2, num3) => {
    let nums = [num1, num2, num3]
    let largestNum = nums.reduce((a, b) => a > b ? a : b)
    return largestNum
}

