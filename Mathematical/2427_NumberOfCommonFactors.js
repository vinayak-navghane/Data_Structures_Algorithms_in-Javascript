// Q.2427. Number of Common Factors - 
// Example 1:
// Input: a = 12, b = 6
// Output: 4
// Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

// Example 2:
// Input: a = 25, b = 30
// Output: 2
// Explanation: The common factors of 25 and 30 are 1, 5.

// Brute force-

var commonFactors = function (a, b) {
    let res = [];


    let minNum = Math.min(a, b);


    for (let i = 1; i <= minNum; i++) {
        if (a % i == 0 && b % i == 0) {
            res.push(i);
        }
    }


    return res.length;
};
// TC- O(min(a,b))
