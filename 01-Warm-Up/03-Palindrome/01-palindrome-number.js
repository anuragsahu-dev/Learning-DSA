// Palindrome Number = Number that reads the same backward as forward.

// Problem Statement:
// Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.

// Requirements:
// Handles both positive and negative integers.
// Return falsefor negative numbers (not Palindromes).

// Constraints:
// Time Complexity: O(d)Where dis the number of digits.

// Space Complexity: O(1)Only a few variables are used.

// Examples:
// Input:121

// Output:true

// Input:-121

// Output:false

// Input:10

// Output:false

function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    let reversed = 0;
    let temp = x;
    while (temp > 0) {
        let lastDigit = temp % 10;
        reversed = (reversed * 10) + lastDigit;
        temp = Math.floor(temp / 10);
    }
    return reversed === x;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(122));

// for last digit = 121 % 10 = 1
// to remove last digit = 121 / 10 = 12