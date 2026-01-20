// Bubble Sort
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
// This process is repeated until the array is sorted.
// After each pass, the largest unsorted element “bubbles up” to its correct position at the end of the array. It’s called “Bubble Sort”
// As smaller elements slowly “bubble” to the top of the list.
// Approach:
// Iterate through the array multiple times.
// In each pass, compare adjacent elements.
// If the current element is greater than the next one, swap them.
// After each pass, the largest unsorted element bubbles up to its correct position at the end.
// Use a boolean flag (isSwapped) to track whether any swapping happened.
// If no swaps occurred in a full pass, the array is already sorted → early exit (optimization).
// Repeat this process for n - 1 passes (where n is the array length), or until no swaps are needed.
// Time & Space Complexity:
// Time Complexity: O(n) (Best Case) when array is already sorted (optimized with isSwapped).

// Worst Case: O(n2) When array is in reverse order.

// Space Complexity: O(1) In-place sorting, no extra space used.

function bubbleSort(nums) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}

const arr = [5, 2, 4, 1];

bubbleSort(arr);

console.log(arr);

// improving our bubble sort algorithm
// optimized bubble sort code

function bubSort(nums) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {

        let isSwapHappening = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;

                isSwapHappening = true;
            }
        }

        if (!isSwapHappening) break;
    }
}