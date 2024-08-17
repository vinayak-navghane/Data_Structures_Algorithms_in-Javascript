// 74. Search a 2D Matrix
/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]] 
 i.e   [[1, 3, 5, 7],
       [10,11,16,20],
       [23,30,34,60]]

target = 3
Output: true
*/

var searchMatrix = function (matrix, target) {
    let r = matrix.length;
    let c = matrix[0].length;

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
    }
    return false;
};

//TC - O(m * n) where m is rows and n is colums;

// Better approach - 

var searchMatrix = function (matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = left + Math.floor(right - left);
        let midVal = matrix[Math.floor(mid / cols)][mid % cols]

        if (midVal === target) return true;
        else if (target > midVal) {
            left = mid + 1;
        }
        else {
            right = mid - 1
        }
    }
    return false;
};
// TC - O(log n) where n = rows * cols, ]
// So finally TC will be O(log(rows * cols))