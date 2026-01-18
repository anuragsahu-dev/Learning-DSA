// Problem
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Examples
// Input: nums = [2, 2, 1] → Output: 1
// Input: nums = [4, 1, 2, 1, 2] → Output: 4
// Input: nums = [1] → Output: 1
// Constraints
// 1 ≤ nums.length ≤ 3 × 104
// -3 × 104 ≤ nums[i] ≤ 3 × 104
// Each element appears twice except one that appears only once.



// we are using XOR here we already see it in CPP

function singleNumber(nums){
    let xor = 0;

    for(let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }

    return xor;
}

const input = [4, 1, 2, 1, 2];

console.log(singleNumber(input));