/*
Boyer-Moore Majority Voting Algorithm -

The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among the given elements that have more than N/ 2 occurrences. This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, which works in O(N) time complexity and O(1) space complexity.

Let us see the algorithm and intuition behind its working, by taking an example –

Input :{1,1,1,1,2,3,5}
Output : 1
Explanation : 1 occurs more than 3 times.
Input : {1,2,3}
Output : -1
*/

// To write out this algorithm in code, we should start with initializing a candidate and a count. We also know that we will be returning the candidate at the end, so we can include that return statement at the bottom

function majorityElementWithMoore(nums) {
    let candidate;
    let count = 0;

    //...
    return candidate;
}

//   Now, we will walk through each element in the nums array. For this, we can use a number of loops, but we will be using the for-in loop.

function majorityElementWithMoore(nums) {
    let candidate;
    let count = 0;

    for (let elem of nums) {
        //...
    }

    return candidate;
}

// If the count is at zero, then we can set the candidate to the current element we're on.

function majorityElementWithMoore(nums) {
    let candidate;
    let count = 0;

    for (let elem of nums) {
        if (count === 0) {
            candidate = elem;
        }
        //...
    }

    return candidate;
}

//   If the element we're on is equal to the candidate, then we can increment the count. If the element is different than the candidate, then we can decrement the count.

function majorityElementWithMoore(nums) {
    let candidate;
    let count = 0;

    for (let elem of nums) {
        if (count === 0) {
            candidate = elem;
        }
        if (candidate === elem) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}