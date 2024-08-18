//1011. Capacity To Ship Packages Within D Days
/*
A conveyor belt has packages that must be shipped from one port to another within days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
*/
// Brute force - 
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function numberOfDays(weights, capacity) {
    let days = 1;
    let load = 0;

    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > capacity) {
            // If a single package exceeds capacity, it's impossible to ship
            return Infinity;
        }
        if (load + weights[i] > capacity) {
            days++;
            load = weights[i];
        } else {
            load += weights[i];
        }
    }
    return days;
}

var shipWithinDays = function (weights, days) {
    let maxWeight = Math.max(...weights);
    let sumOfWeights = weights.reduce((a, b) => a + b, 0);

    for (let capacity = maxWeight; capacity <= sumOfWeights; capacity++) {
        let daysRequired = numberOfDays(weights, capacity);
        if (daysRequired <= days) {
            return capacity;
        }
    }
    return sumOfWeights; // In worst case, capacity is sum of all weights
};

//TC - O((sum - max) + 1) * O(n)

// Using Binary Search - 
function numberOfDays(weights, capacity) {
    let days = 1;
    let load = 0;

    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > capacity) {
            // If a single package exceeds capacity, it's impossible to ship
            return Infinity;
        }
        if (load + weights[i] > capacity) {
            days++;
            load = weights[i];
        } else {
            load += weights[i];
        }
    }
    return days;
}

var shipWithinDays = function (weights, days) {
    let maxWeight = Math.max(...weights);
    let sumOfWeights = weights.reduce((a, b) => a + b, 0);

    let low = maxWeight;
    let high = sumOfWeights;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let numOfDays = numberOfDays(weights, mid);

        if (numOfDays <= days) {
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return low;
};
// TC - O(log(sum - max + 1)) * O(n)
