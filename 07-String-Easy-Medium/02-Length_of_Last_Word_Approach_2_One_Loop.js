// Problem Statement:
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is defined as a maximal substring consisting of non-space characters only.

// Example:
// Input: s = “Hello World”
// Output: 5

// Input: s = ” fly me to the moon “
// Output: 4

// Input: s = “luffy is still joyboy”
// Output: 6

// Constraints:
// 1 ≤ s.length ≤ 104
// s consists of only English letters and spaces ' '
// There will be at least one word in s
// Approach:
// Start from the end and skip trailing spaces.
// Count characters until the next space or beginning of string.
// This gives the length of the last word efficiently.
// Time and Space Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

function lengthOfLastWord(s) {
    let i = s.length - 1;
    let count = 0;
    while (i >= 0) {
        if (s[i] !== " ") {
            count++;
        } else if (count > 0) {
            break;
        }

        i--;
    }
}