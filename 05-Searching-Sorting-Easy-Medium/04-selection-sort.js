// Selection Sort
// Selection Sort is a simple comparison-based sorting algorithm.
// It divides the array into two parts: a sorted subarray and an unsorted subarray.
// Initially, the sorted part is empty, and the unsorted part is the entire array.
// In each iteration, it finds the minimum element from the unsorted part and moves it to the end of the sorted part.


function selectionSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // Swap only if minimum is not already in place
        if (minIndex !== i) {
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }
}