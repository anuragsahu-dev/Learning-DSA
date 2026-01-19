// Problem Statement:
// Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

// Example 1:
// Input: 8

// Process: (8 → 4 → 2 → 1)

// Output: true

// Example 2:
// Input: 18

// Output: false

function isPowerOfTwo(n) {
    //   this is base case
    if (n == 1) return true;

    // this is checking even
    if (n % 2 !== 0 || n < 1) return false;
    
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(10))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(-1))
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));