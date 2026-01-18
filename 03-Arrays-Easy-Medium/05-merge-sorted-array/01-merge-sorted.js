// Problem Statement:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Mergenums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Examples:
// Example 1:
// Input:

// nums1 = [1,2,3,0,0,0], m = 3 nums2 = [2,5,6], n = 3

// Output: [1,2,2,3,5,6]

// Explanation: The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input:

// nums1 = [1], m = 1, nums2 = [], n = 0

// Output:[1]

// Explanation: The arrays we are merging are [1] and []. The result of the merge is [1].

// Example 3:
// Input:

// nums1 = [0], m = 0 nums2 = [1], n = 1

// Output:[1]

// Explanation: The arrays we are merging are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Time Complexity:
// Time Complexity = O((m+n) log (m+n)) Due to sorting.

// Space Complexity:
// Space Complexity = O(1) Extra (in-place).

function mergeSortedArrayBruteForceApproach(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

// mergeSortedArrayBruteForceApproach(nums1, m, nums2, n);

// console.log(nums1);

// second 2 pointer approach

function twoPointerApproach(nums1, m, nums2, n) {
    // const nums1Copy = Array.from({ length: m });

    // for (let i = 0; i < m; i++) {
    //     nums1Copy[i] = nums1[i];
    // }

    // or use slice 

    const nums1Copy = nums1.slice(0, m);


    let p1 = 0;
    let p2 = 0;

    for (let j = 0; j < m + n; j++) {
        // If nums1Copy is exhausted, take from nums2
        if (p1 >= m) {
            nums1[j] = nums2[p2];
            p2++;
        }
        // If nums2 is exhausted, take from nums1Copy
        else if (p2 >= n) {
            nums1[j] = nums1Copy[p1];
            p1++;
        }
        // Both arrays have elements, pick the smaller one
        else if (nums1Copy[p1] < nums2[p2]) {
            nums1[j] = nums1Copy[p1];
            p1++;
        } else {
            nums1[j] = nums2[p2];
            p2++;
        }
    }
}

// twoPointerApproach(nums1, m, nums2, n);

// console.log(nums1)

// now the thrid approach without using extra space

function thridApproach(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {

        if (p2 < 0) {
            break;
        } else if (p1 < 0) {
            nums1[i] = nums2[p2];
            p2--;
        }
        else if (nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
}

thridApproach(nums1, m, nums2, n);

console.log(nums1);