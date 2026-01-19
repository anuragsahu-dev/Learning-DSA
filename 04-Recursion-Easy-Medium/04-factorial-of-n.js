// Problem Statement:
// Write a recursive function fact(n) that returns the factorial of a number n.

// Example:
// Input: 5

// Process: (5 * 4 * 3 * 2 * 1)

// Output: 120

function factorial(n){
   if (n == 0 || n == 1) return 1;

   return n * factorial(n - 1);
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(1));