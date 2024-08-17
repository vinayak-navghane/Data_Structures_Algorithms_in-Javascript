// 1901. Find a Peak Element II

/* 
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

example -
 [10,20,15]
 [21,30,14]
 [ 7,16,32]

 Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
Output: [1,1]
Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.

Constraints:
No two adjacent cells are equal.
*/

/*
 * @param {number[][]} mat
 * @return {number[]}
 */
function findMaxRowIndex(mat, col) {
    let maxRowIndex = 0;
    for (let i = 1; i < mat.length; i++) {
        if (mat[i][col] > mat[maxRowIndex][col]) {
            maxRowIndex = i;
        }
    }
    return maxRowIndex;
}

var findPeakGrid = function (mat) {
    let n = mat.length;
    let m = mat[0].length;

    let low = 0;
    let high = m - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let maxRowIndex = findMaxRowIndex(mat, mid);

        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = mid + 1 < m ? mat[maxRowIndex][mid + 1] : -1;

        if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right) {
            return [maxRowIndex, mid];
        } else if (mat[maxRowIndex][mid] < left) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [-1, -1];
};

// TC - (O(n log(m)))