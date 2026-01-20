// Binary Search
// Binary Search is an efficient algorithm used to find the position of a target value within a sorted array. Unlike linear search, it repeatedly divides the search interval in half, significantly reducing the number of comparisons.

// Example 1:
// Input: [1, 3, 5, 7, 9]

// Output: 7

function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
  
      if (target === nums[middle]) {
        return middle;
      } else if (target > nums[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  
    return -1;
};


  const input = [1, 3, 5, 7, 9];

  const target = 1;

  console.log(binarySearch(input, target))

  function binarySearchDescending(nums, target) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
  
      if (target === nums[middle]) {
        return middle;
      } else if (target > nums[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  
    return -1;
};