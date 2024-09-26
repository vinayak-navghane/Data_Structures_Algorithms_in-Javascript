//Stock span problem
/*
The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate the span of stocks price for all n days. 
The span Si of the stocks price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the given day is less than or equal to its price on the current day.
For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}.

Input: 
N = 7, price[] = [100 80 60 70 60 75 85]
Output:
1 1 1 2 1 4 6
Explanation:
Traversing the given input span 
100 is greater than equal to 100 and there are no more elements behind it so the span is 1,
80 is greater than equal to 80 and smaller than 100 so the span is 1,
60 is greater than equal to 60 and smaller than 80 so the span is 1,
70 is greater than equal to 60,70 and smaller than 80 so the span is 2,
60 is greater than equal to 60 and smaller than 70 so the span is 1,
75 is greater than equal to 60,70,60,75 and smaller than 100 so the span is 4,
85 is greater than equal to 80,60,70,60,75,85 and smaller than 100 so the span is 6. 
Hence the output will be 1 1 1 2 1 4 6.
*/

//Brute force - O(n^2)
class Solution {
    //Function to calculate the span of stockâ€™s price for all n days.
    calculateSpan(price, n) {
        let res = []
        for (let i = 0; i < n; i++) {
            let span = 1
            for (let j = i - 1; j >= 0 && price[j] < price[i]; j--) {
                span++
            }
            res.push(span)
        }
        return res
    }
}
//Tc - O(n^2)


//Optimized - Intution is to store previous greatest elements index in 
//stack

class Solution {
    //Function to calculate the span of stockâ€™s price for all n days.
    calculateSpan(price, n) {
        let st = [];
        let res = new Array(n).fill(0);

        res[0] = 1;
        st.push(0);

        for (let i = 1; i < n; i++) {
            while (st.length && price[st[st.length - 1]] <= price[i]) {
                st.pop()
            }
            res[i] = !st.length ? (i + 1) : (i - st[st.length - 1])
            st.push(i)
        }
        return res
    }
}

//TC - O(n) - for loop (O(n)) + while loop (O(n))
//SC- O(n)