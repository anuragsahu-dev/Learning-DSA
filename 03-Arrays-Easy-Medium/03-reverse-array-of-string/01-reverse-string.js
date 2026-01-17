// Problem Statement:
// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

// Examples:
// Example 1:
// Input:s = [“h”,”e”,”l”,”l”,”o”]

// Output:[“o”,”l”,”l”,”e”,”h”]

// Example 2:
// Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

// Output:[“h”,”a”,”n”,”n”,”a”,”H”]

// Approach: Two Pointer Technique
// Initialize two pointers, one at the start and one at the end of the array.
// Swap the characters at both pointers.
// Move the pointers towards the center until they meet.
// Time Complexity:
// Time Complexity = O(n)

// Space Complexity:
// Space Complexity = O(1)


function reverseString(s){
    let i = 0;
    let j = s.length - 1;

    while(i < j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--;
        i++;
    }
}

const input =  ["h", "e", "l", "l", "o"];

reverseString(input);

console.log(input);