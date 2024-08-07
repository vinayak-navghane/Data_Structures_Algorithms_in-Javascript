// Second Largest- Given an array arr, return the second largest distinct element from an array. If the second largest element doesn't exist then return -1.

// Brute force - 


class Solution {
    // Function returns the second largest element
    print2largest(arr) {
        let n = arr.length;
        let first, second;

        // There should be at least two elements
        if (n < 2) {
            return -1;
        }

        first = second = -Infinity;
        for (let i = 0; i < n; i++) {
            // If current element is greater than first then update both first and
            // second
            if (arr[i] > first) {
                second = first;
                first = arr[i];
            }
            // If arr[i] is in between first and second then update second
            else if (arr[i] > second && arr[i] != first) {
                second = arr[i];
            }
        }

        return second === -Infinity ? -1 : second;
    }
}
// TC- O(n)
