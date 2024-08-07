
/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */
class Solution {

    // Function to swap two elements in the array
    swap(arr, i, j) {
        let temp = arr[i]; // Store the value of arr[i] in a temporary variable
        arr[i] = arr[j]; // Assign the value of arr[j] to arr[i]
        arr[j] = temp; // Assign the temporary variable to arr[j]
    }

    // Function to perform quick sort on the array
    quickSort(arr, low, high) {

        if (low < high) {
            let pi = this.partition(arr, low, high); // Find the pivot element
            this.quickSort(arr, low, pi - 1); // Recursively perform quick sort on the left subarray
            this.quickSort(arr, pi + 1, high); // Recursively perform quick sort on the right subarray
        }
    }

    // Function to partition the array and return the index of the pivot element
    partition(arr, low, high) {
        let pivot = arr[high]; // Choose the last element as the pivot
        let i = low - 1; // Initialize the index of the smaller element

        // Move all elements smaller than the pivot to the left of it
        for (let j = low; j <= high - 1; j++) {
            if (arr[j] <= pivot) {
                i++;
                this.swap(arr, i, j); // Swap arr[i] and arr[j]
            }
        }

        this.swap(arr, i + 1, high); // Swap the pivot element into its correct position
        return i + 1; // Return the index of the pivot element
    }
}

/*
TC - 
Worst-case time complexity: O(n ^ 2)
Best-case time complexity:  O(n log(n))
*/