/*
Minimun Sum -
 Given an array Arr of size N such that each element is from the range 0 to 9. Find the minimum possible sum of two numbers formed using the elements of the array. All digits in the given array must be used to form the two numbers.

Input:
N = 5
Arr[] = {5, 3, 0, 7, 4}
Output: 82
Explanation: The minimum sum is 
formed by numbers 35 and 047.

Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(N)
*/


/* Solution - 
A minimum number will be formed from set of digits when smallest digit appears at most significant position and next smallest digit appears at next most significant position and so on. The idea is to sort the array in increasing order and build two numbers by alternating picking digits from the array. So first number is formed by digits present in odd positions in the array and second number is formed by digits from even positions in the array.


Follow the given steps to solve the problem:

1. Sort the array in increasing order
2. Declare two variables a and b, representing the two numbers to be formed
3. Traverse the array and if the index is odd then add this element into a, else 4. add it to b
5. Return the sum of two variables (a + b)

-- reverse() function reverses the given string str
-- findSum() function takes two strings representing numbers and returns their sum as a string.
-- solve() function takes an array of digits, forms two numbers from them, and returns their minimum possible sum.
*/


class Solution {

    reverse(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }

    findSum(str1, str2) {
        // Before proceeding further, make sure length
        // of str2 is larger.
        // console.log(str1);
        // console.log(str2);
        if (str1.length > str2.length) {
            let temp;
            //swap variables
            temp = str1;
            str1 = str2;
            str2 = temp;
        }
        // console.log(str1);
        // console.log(str2);
        // Take an empty string for storing result
        let str = "";

        // Calculate length of both string
        let n1 = str1.length, n2 = str2.length;
        let diff = n2 - n1;

        // Initially take carry zero
        let carry = 0;

        // Traverse from end of both strings
        for (let i = n1 - 1; i >= 0; i--) {
            // Do school mathematics, compute sum of
            // current digits and carry
            let sum = (parseInt(str1[i]) + parseInt(str2[i + diff]) + parseInt(carry));
            // console.log(`${str2[i + diff]} ${str1[i]} ${carry}`);
            str += (sum % 10);
            carry = Math.floor(sum / 10);
        }

        // Add remaining digits of str2[]
        for (let i = n2 - n1 - 1; i >= 0; i--) {
            let sum = (parseInt(str2[i]) + parseInt(carry));
            str += (sum % 10);
            carry = Math.floor(sum / 10);
        }

        // Add remaining carry
        if (carry) {
            str += (carry);
        }

        // reverse resultant string
        let s = this.reverse(str);

        return s;
    }


    solve(arr, n) {
        // sort the array
        arr.sort((a, b) => a - b);

        // let two numbers be a and b
        let a = "", b = "";
        for (let i = 0; i < n; i++) {
            if (arr[i] === 0 && i !== n - 1) continue;
            // fill a and b with every alternate digit
            // of input array
            if (i & 1)
                a += (arr[i]);
            else
                b += (arr[i]);
        }

        // return the sum
        return this.findSum(a, b);
    }
}

// TC - O(n log n)
