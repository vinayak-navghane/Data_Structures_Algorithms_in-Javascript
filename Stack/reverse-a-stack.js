/*
You are given a stack St. You have to reverse the stack using recursion.

St = {3,2,1,7,6}
Output:
{6,7,1,2,3}
*/

//brute force - SC - O(n)

class Solution {
    //Function to reverse a string.
    reverse(St) {
        let stack = []
        let res = ''
        let i = 0

        while (i < St.length) {
            stack.push([St[i]])
        }

        while (stack.length) {
            res += stack.pop()
        }
        return res
    }
}