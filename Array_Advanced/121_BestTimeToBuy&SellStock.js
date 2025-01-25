/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

// Brute force -

var maxProfit = function (prices) {
    let maxProfit = 0
    let n = prices.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (prices[i] >= prices[j]) {
                continue
            }
            else {
                let profit = prices[j] - prices[i]
                maxProfit = Math.max(maxProfit, profit)
            }
        }
    }
    return maxProfit
};

// TC - O(n^2)



// Optimized Approach 1 - Sliding Window 

var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let res = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) res = Math.max(res, prices[right] - prices[left]);
        else left = right;
        right++;
    }
    return res;
};
//  TC - O(n)


// Optimized Approach 2 - Single Pass - Tracking Min Price

var maxProfit = function (prices) {
    if (prices.length < 2) return 0; // No transaction possible

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // Calculate the current profit
        let profit = prices[i] - minPrice;

        // Update maxProfit if the current profit is higher
        maxProfit = Math.max(maxProfit, profit);

        // Update minPrice if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
};
//  TC - O(n)
