// Merge Sort
// Merge Sort is a popular divide-and-conquer sorting algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves into one sorted result.
// It is an example of a stable sort that guarantees O(n log n) performance in all cases — best, worst, and average.
// Approach:
// Divide: Split the array into two halves.
// Conquer: Recursively sort each half using merge sort.
// Combine: Merge the two sorted halves into one sorted array.
// Key Concept: Merge Step
// The key step is merging two sorted arrays efficiently into one sorted array.
// This is done using a two-pointer approach, comparing elements from both arrays and adding the smaller one into a new result array.
// Time & Space Complexity:
// Time Complexity: O(n log n) Divide takes log n steps and merging takes linear time.

// Space Complexity: O(n) Additional space is needed to store the merged arrays.

function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

// this is my code 

function merge(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare elements from both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// this is akshay saini and both are good 

function mergeAk(arr1, arr2) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    return [...res, ...arr1.slice(i), ...arr2.slice(j)];
}

// ============================================
// COMPARISON: merge() vs mergeAk()
// ============================================
//
// | Aspect          | merge() (My Code)           | mergeAk() (Akshay Saini)              |
// |-----------------|-----------------------------|-----------------------------------------|
// | Readability     | Very clear, explicit loops  | Concise, clean one-liner return         |
// | Lines of Code   | ~20 lines                   | ~12 lines                               |
// | Performance     | Slightly better             | Good                                    |
// | Stability       | ✅ Yes (uses <=)            | ⚠️ No (uses < only)                    |
// | Memory          | Same array, efficient       | Creates extra arrays with slice/spread  |
//
// --------------------------------------------
// KEY DIFFERENCE: STABILITY
// --------------------------------------------
//
// merge() uses:    if (arr1[i] <= arr2[j])  --> STABLE ✅ (Equal elements from arr1 come first)
// mergeAk() uses:  if (arr1[i] < arr2[j])   --> NOT STABLE ⚠️ (Equal elements from arr2 come first)
//
// Stability matters when sorting objects by a key — you want to preserve
// the relative order of equal elements.
//
// --------------------------------------------
// MEMORY CONSIDERATION
// --------------------------------------------
//
// mergeAk's return: [...res, ...arr1.slice(i), ...arr2.slice(j)]
// - Creates 3 extra intermediate arrays
// - Slightly more memory overhead
//
// merge's approach: Uses push() in a loop
// - No extra array allocations
// - More memory efficient
//
// --------------------------------------------
// VERDICT
// --------------------------------------------
//
// ✅ For Learning/Interviews: Use merge() (my code)
//    - Uses <= which maintains stability
//    - More explicit — shows understanding of the algorithm
//    - No hidden memory allocations
//
// ✅ For Quick Prototyping: mergeAk() is fine
//    - More concise and "JavaScript-y"
//    - Works correctly, just not stable
//
// RECOMMENDATION: Keep merge() for real-world applications! 💪