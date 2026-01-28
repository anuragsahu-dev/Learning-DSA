// The problem requires reversing the first k characters for every 2k characters in a string. If there are fewer than k characters left, reverse all of them. If there are between k and 2k characters left, reverse the first k and leave the rest as is.

// Steps
// Convert the string into a character array (if needed).
// Iterate over the array in steps of 2k.
// At each step, reverse the next k characters if available.
// Join or return the modified string.
// Dry Run
// Input: s = "abcdefg", k = 2

// First 2k = 4 chars: reverse first 2 → "bacd"
// Remaining = “efg”: reverse first 2 → "fe", keep “g”
// Output: "bacdfeg"
// Time & Space Complexity
// Time Complexity: O(n), where n = length of the string
// Space Complexity: O(1) if in-place, else O(n)

function reverseStr(s, k) {
    s = s.split("");

    for (let x = 0; x < s.length; x = x + (2 * k)) {
        let i = x;
        let j = Math.min(x + k - 1, s.length - 1);

        while (i < j) {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
    }

    return s.join("");
}

// if we do this let j = x + k - 1;
// this works fine for when elements are greater or equals to k
// if number of elements less than k so our j = s.length - 1;
// that's why we use this last line
//  let j = Math.min(x + k - 1, s.length - 1);