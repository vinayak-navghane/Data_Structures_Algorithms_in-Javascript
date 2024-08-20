// Aggressive Cows
/*
Problem statement
You are given an array 'arr' consisting of 'n' integers which denote the position of a stall.

You are also given an integer 'k' which denotes the number of aggressive cows.

You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.

Print the maximum possible minimum distance.

Example:
Input: 'n' = 3, 'k' = 2 and 'arr' = {1, 2, 3}

Output: 2

Explanation: The maximum possible minimum distance will be 2 when 2 cows are placed at positions {1, 3}. Here distance between cows is 2.
-----------------------------------------------------------------------
Sample Input 1 :
6 4
0 3 4 7 10 9


Sample Output 1 :
3

Explanation to Sample Input 1 :
The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here distance between cows are 3, 4 and 3 respectively.
*/
// brute force - 

function canWePlace(stalls, dist, cows) {
    let cowsCount = 1;
    let last = stalls[0];

    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - last >= dist) {
            cowsCount++;
            last = stalls[i];
        }
    }

    if (cowsCount >= cows) return true;
    else return false;
}
function aggressiveCows(stalls, k) {
    stalls.sort((a, b) => a - b);  // Ensure stalls are sorted

    let minDist = 1;
    let maxDist = stalls[stalls.length - 1] - stalls[0];
    let result = minDist;

    for (let i = minDist; i <= maxDist; i++) {
        if (canWePlace(stalls, i, k)) {
            result = i;  // Update result to the current distance
        }
    }

    return result;
}

// O(n log n) + O(max-min) * O(n)  i.e in worst case O(n^2) * O(n) = O(n^3)

// Using Binary Search - 

function canWePlace(stalls, dist, cows) {
    let cowsCount = 1;
    let last = stalls[0];

    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - last >= dist) {
            cowsCount++;
            last = stalls[i];
        }
    }

    if (cowsCount >= cows) return true;
    else return false;
}
function aggressiveCows(stalls, k) {
    stalls.sort((a, b) => a - b);  // Ensure stalls are sorted

    let low = 1;
    let high = stalls[stalls.length - 1] - stalls[0];

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (canWePlace(stalls, mid, k) == true) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return high;

}

// O(n log n) + O(log(max-min)) * O(n)


/*
 [0, 3, 4, 7, 9, 10] 
  l     m         h 
 */