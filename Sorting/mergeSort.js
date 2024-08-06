//Merge Sort - 


/*
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */

class Solution {
    merge(arr, l, m, r) {
        let n1 = m - l + 1;
        let n2 = r - m;

        /* Create temp arrays */
        let L = new Array(n1);
        let R = new Array(n2);

        /*Copy data to temp arrays*/
        for (let i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];


        /* Merge the temp arrays */

        // Initial indexes of first and second subarrays
        let i = 0, j = 0;

        // Initial index of merged subarry array
        let k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        /* Copy remaining elements of L[] if any */
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        /* Copy remaining elements of L[] if any */
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    mergeSort(arr, l, r) {
        if (l < r) {
            let m = Math.floor((l + r) / 2);
            this.mergeSort(arr, l, m);
            this.mergeSort(arr, m + 1, r);
            this.merge(arr, l, m, r);
        }
    }

}

// TC - O(n log(n))
