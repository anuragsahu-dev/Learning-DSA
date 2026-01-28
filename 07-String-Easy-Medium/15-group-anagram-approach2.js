// Instead of sorting the string, this approach creates a unique hash key for each string based on the frequency of characters. This improves performance by avoiding costly sort operations for every string.

// Steps
// Initialize a hashmap to store grouped anagrams.
// For each word in the input array:
// Create an array of size 26 to count frequency of each letter.
// Convert that frequency array into a unique string key (like “#1#0#2…”).
// Use this string as a hash key to group anagrams.
// Return all the grouped values.
// Dry Run
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

// "eat" → freq = [1,0,0,...,1,1,...] → key = “#1#0#0#0…#1#1”
// All anagrams like “tea” and “ate” will have the same key.
// Final groups: [["eat","tea","ate"],["tan","nat"],["bat"]]
// Time & Space Complexity
// Time Complexity: O(n·k), where n = number of strings, k = average length of strings (no sorting)
// Space Complexity: O(n·k), for storing frequency map and result

// approach 2 hashing

// leetcode 49 question number


function groupAnagrams(strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let freqTable = Array(26).fill(0);
        let s = strs[i];
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
            freqTable[index]++;
        }

        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k + "a".charCodeAt(0)) + freqTable[k];
        }

        // fill the map

        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }

    return Object.values(map);
}


