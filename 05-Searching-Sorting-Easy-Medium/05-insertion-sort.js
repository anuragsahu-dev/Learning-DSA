// Insertion Sort
// Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.
// It works by taking each element from the input and inserting it into its correct position in the already sorted part of the array.
// Starting from the second element, it compares the current element with the previous ones, shifting larger elements one position ahead to make space for the current element.
// This process continues until all elements are sorted.
// Insertion Sort is efficient for small or nearly sorrted datasets and operates in-place without requiring extra memory.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;

        while (prev >= 0 && arr[prev] > curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
}

const arr = [4, 5, 1, 3, 9];

insertionSort(arr);

console.log(arr);