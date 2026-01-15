// Problem Statement:
// Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

// Requirements:
// Handles both positive and negative integers.
// Return 1 if n is 0(since 0 is a single-digit number).

// Examples:
// Input:259
// Output:3

// Input:-1035
// Output:4

// Input:0
// Output:1

// Solution:


function countDigits(n) {

    if (n === 0) {
        return 1;
    }

    n = Math.abs(n);
    let digitCount = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        digitCount++;
    }

    return digitCount;
}
console.log(countDigits(256));

// javascript gives absolute value in division 259/10 = 25.9, so we have to use Math.floor()

// Math.floor() is a built-in function in JavaScript that returns the largest integer less than or equal to a given number.
// Math.abs() is a built-in function in JavaScript that returns the absolute value of a number.

// Math.abs() is used to convert negative number to positive number.
// Math.floor() is used to convert decimal number to integer number.

// Math.ceil() is a built-in function in JavaScript that returns the smallest integer greater than or equal to a given number.
// Math.ceil() is used to convert decimal number to integer number.
