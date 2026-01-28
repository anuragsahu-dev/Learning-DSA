
// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


function isPalindrome(s) {
    s = s.toLowerCase();
    let filteredString = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) { // it check if element is a to z or 0 to 9 or not
            filteredString += s[i];
        }
    }

    let i = 0;
    let j = filteredString.length - 1;

    while (i < j) {
        if (filteredString[i] !== filteredString[j]) return false;
        i++;
        j--;
    }

    return true;
}

const input = "A man, a plan, a canal: Panama";

console.log(isPalindrome(input));
