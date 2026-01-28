// This problem checks whether two strings are anagrams of each other. Two strings are anagrams if they contain the exact same characters with the same frequency but possibly in a different order.

// Steps
// First, check if the lengths of both strings are equal. If not, return false.
// Create a hashmap (or character counter) to store the frequency of characters in the first string.
// Iterate over the second string and decrease the corresponding frequency in the map.
// If a character is not found or the count goes below zero, return false.
// If all characters match, return true at the end.
// Dry Run
// Input: s = "anagram", t = "nagaram"

// Build map from s: {a:3, n:1, g:1, r:1, m:1}
// Scan t:
// n → found → decrement
// a → found → decrement
// g → found → decrement
// a → found → decrement
// r → found → decrement
// a → found → decrement
// m → found → decrement
// All values are zero → return true
// Time & Space Complexity
// Time Complexity: O(n), where n is the length of the strings
// Space Complexity: O(1), since the character set is limited to 26 lowercase letters

// Method 1: Using Sorting
// Time Complexity: O(n log n) - due to sorting
// Space Complexity: O(n)
//   - s.split("") → creates new array of n characters → O(n)
//   - .sort()     → in-place, but internal recursion → O(log n)
//   - .join("")   → creates new string of n characters → O(n)
//   - Same happens for t, so total space = O(n)

function isAnagram(s, t) {

    if (s.length !== t.length) return false;

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;

}

// Method 2: Using Hashing (Better Approach)
// Time Complexity: O(n) - single pass through both strings
// Space Complexity: O(1) - max 26 keys for lowercase letters (constant space)

function hashingIsAnagram(s, t) {
    if (s.length !== t.length) return false;

    //  freqTable of s string
    let freqTable = {};
    for (let i = 0; i < s.length; i++) {
        const freq = (freqTable[s[i]] || 0) + 1;
        freqTable[s[i]] = freq;
    }

    // now traversing the t string

    for (let j = 0; j < t.length; j++) {
        if (!freqTable[t[j]] || freqTable[t[j]] === 0) {
            return false;
        } else {
            freqTable[t[j]]--;
        }
    }

    return true;
}

// Test cases
console.log("Sorting approach:", isAnagram("anagram", "nagaram")); // true
console.log("Hashing approach:", hashingIsAnagram("anagram", "nagaram")); // true

console.log("Sorting approach:", isAnagram("rat", "car")); // false
console.log("Hashing approach:", hashingIsAnagram("rat", "car")); // false