// Largest Element in Array - Given an array arr, the task is to find the largest element in it.

function largest(n, arr) {
    let res = Math.max(...arr);
    return res;
}


// TC-O(n)

// one more solution -

function largest(n, arr) {
    let maxNo = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] > maxNo)
            maxNo = arr[i];
    }
    return maxNo;
}


// TC - O(n)
