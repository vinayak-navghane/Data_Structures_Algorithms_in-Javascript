//Next Greater Element
/*
Given an array arr[ ] of n elements, the task is to find the next greater element for each element of the array in order of their appearance in the array. Next greater element of an element in the array is the nearest element on the right which is greater than the current element.
If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.

Input: arr[] = [1 3 2 4], n = 4
Output: 3 4 4 -1
Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.
*/


class Solution {
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n) {
        let st = []
        let res = []

        for (let i = n - 1; i >= 0; i--) {
            while (st.length != 0 && st[st.length - 1] <= arr[i]) {
                st.pop()
            }
            if (st.length == 0) res[i] = -1

            else res[i] = st[st.length - 1]

            st.push(arr[i])
        }

        return res
    }
}

//TC = O(2n) == O(n)
//SC = O(n)

