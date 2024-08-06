// Bubble Sort -
// Input: 
// N = 5
// arr[] = {4, 1, 3, 9, 7}
// Output: 
// 1 3 4 7 9

class Solution {
    //Function to sort the array using bubble sort algorithm.
    bubbleSort(arr, n) {
        for (let i = 1; i < n; i++) {
            //this loop is for total rounds i.e 1 to n-1
            for (let j = 0; j < n - i; j++) { // if we use i < n-1 in outer loop then use n-i-1 here
                //this loop is for actual bubble sort & to process ele till n-i index
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

}

//TC - O(n^2)

