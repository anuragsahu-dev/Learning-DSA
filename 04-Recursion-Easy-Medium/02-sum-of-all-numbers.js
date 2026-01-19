// Problem Statement:
// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

// Example:
// Input: [5, 2, 6, 1, 3]

// Process: 5 + 2 + 6 + 1 + 3 = 17

// Output: 17


function sum(nums, n){
    if(n == 0) return nums[0];

    return nums[n] + sum(nums, n - 1);
}

const input = [5, 2, 6, 1, 3]

console.log(sum(input, input.length - 1));