// Problem Statement:
// Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

// Note:You must do this in-place without making a copy of the array.

// Examples
// Example 1:

// Input:nums = [0,1,0,3,12]

// Output:[1,3,12,0,0]

// Example 2:

// Input:nums = [0]

// Output:[0]


function moveZeros(nums){
    let p = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[p] = nums[i];
            p++;
        }
    }

    for(let i = p; i < nums.length; i++){
        nums[i] = 0;
    }
}

let input = [0, 1, 0, 3, 12];

moveZeros(input);

console.log(input);