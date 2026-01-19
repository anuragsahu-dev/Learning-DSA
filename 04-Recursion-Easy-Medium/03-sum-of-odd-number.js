
// Problem Statement:
// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

// Example:
// Input: [5, 2, 6, 1, 3]

// Odd Numbers: 5, 1, 3

// Output: 9

let arr = [5, 2, 6, 1, 3];

function sum(arr, n) {
    let isOdd = arr[n] % 2 !== 0;
    if (n == 0) return isOdd ? arr[0] : 0;

    return isOdd ? arr[n] + sum(arr, n - 1) : 0 + sum(arr, n - 1);
}

const result = sum(arr, arr.length - 1);

console.log(result);