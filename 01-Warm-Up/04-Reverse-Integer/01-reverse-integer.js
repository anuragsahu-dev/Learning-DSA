// Question: Reverse Integer with Overflow Check
// Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

// Requirements
// Reverse the digits of a 32-bit signed integer.
// Return 0 if the result overflows.
// Constraints
// Time Complexity: O(d) where d is the number of digits.
// Space Complexity: O(1) — constant space.
// Example
// Input: 123
// Output: 321

// Input: -123
// Output: -321

// Input: 1534236469
// Output: 0 (overflow)


function reverseInteger(x) {
    let temp = Math.abs(x);
    let reversed = 0;
    while (temp > 0) {
        let digit = temp % 10;
        temp = Math.floor(temp / 10);
        reversed = reversed * 10 + digit;
    }

    const limit = Math.pow(2, 31);

    if (reversed > limit - 1 || reversed < -limit) {
        return 0;
    }
    return x >= 0 ? reversed : reversed * -1;
} 


console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(1534236469));
console.log(reverseInteger(15342364690));