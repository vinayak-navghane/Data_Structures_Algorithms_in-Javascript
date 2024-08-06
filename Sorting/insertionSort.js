//Insertion Sort -

class Solution {
    insert(arr, i) {
        // code here such that insertionSort() sorts arr[]
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            //shift
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }


    //Function to sort the array using insertion sort algorithm.
    insertionSort(arr, n) {
        //code here
        for (let i = 1; i < n; i++) {

            this.insert(arr, i);
        }

    }
}

//TC - O(n^2)



//Insertion Sort using recursion - 
class Solution {
    // Function to sort the array using insertion sort algorithm.
    insertionSort(arr, n) {
        this.recursiveInsertionSort(arr, n, 1);
    }

    // Recursive function to sort the array.
    recursiveInsertionSort(arr, n, i) {
        if (i >= n) {
            return;
        }
        this.insert(arr, i);
        this.recursiveInsertionSort(arr, n, i + 1);
    }

    insert(arr, i) {
        if (i <= 0 || arr[i - 1] <= arr[i]) {
            return;
        }
        // Swap arr[i] and arr[i-1]
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;

        // Recur for the previous element
        this.insert(arr, i - 1);
    }
}

//TC - O(n^2)
