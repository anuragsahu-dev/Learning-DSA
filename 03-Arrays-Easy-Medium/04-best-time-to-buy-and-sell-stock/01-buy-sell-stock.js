// Problem Statement:
// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Examples:
// Example 1:
// Input:prices = [7, 1, 5, 3, 6, 4]

// Output:5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

// Example 2:
// Input:prices = [7,6,4,3,1]

// Output:0

// Explanation: Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
// Approach: Brute Force
// Initialize maxProfit = 0.
// Use two nested loops.
// Outer loop picks a day ito buy the stock.
// Inner loop picks a day j > i to sell the stock.
// For every pair (i, j), calculate the profit: prices[j] - prices[i].
// If this profit is greater than maxProfit, update maxProfit.
// Time Complexity:
// Time Complexity = O(n2) Two nested loops. For every element i, check all j > i. Total comparisons = n(n-1)/2 → O(n²)

// Space Complexity:
// Space Complexity = O(1) No extra data structures used. Only uses a variable maxProfit.

// brute force approach;

function maxProfit_Brute_Force(prices){
  let maxProfit = 0;
  let n = prices.length;

  for(let i = 0; i < n - 1; i++){
     for(let j = i + 1; j < n; j++){
        if((prices[j] - prices[i]) > maxProfit){
            maxProfit = prices[j] - prices[i];
        }
     }
  }

  return maxProfit;

}

const input = [7, 1, 5, 3, 6, 4];

const result = maxProfit_Brute_Force(input);

console.log(result);

// optimized approach

function maxProfit(prices){
    let maxProfit = 0;
    let minValue = prices[0];

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minValue){
            minValue = prices[i];
        }else{
            if((prices[i] - minValue) > maxProfit){
                maxProfit = prices[i] - minValue;
            }
        }
    }

    return maxProfit;
}

console.log(maxProfit(input))