//Prefix to Infix Conversion
/*
You are given a string S of size N that represents the prefix form of a valid mathematical expression. The string S contains only lowercase and uppercase alphabets as operands and the operators are +, -, *, /, %, and ^.Convert it to its infix form.

Input: 
*-A/BC-/AKL
Output: 
((A-(B/C))*((A/K)-L))
Explanation: 
The above output is its valid infix form.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).

Constraints:
3<=|S|<=104
*/

class Solution {
    //Function to covert prefix expression to infix expression.
    preToInfix(pre_exp) {
        // Helper function to check if a character is an operator
        const isOperator = (c) => {
            return ['+', '-', '*', '/', '%', '^'].includes(c);
        };

        let stack = [];

        // Reverse the prefix expression
        let n = pre_exp.length;
        for (let i = n - 1; i >= 0; i--) {  //O(n)
            let c = pre_exp[i];

            // If the character is an operator
            if (isOperator(c)) {
                // Pop two operands from stack
                let operand1 = stack.pop();
                let operand2 = stack.pop();

                // Form the infix expression and push it back to stack
                let expression = `(${operand1}${c}${operand2})`;
                stack.push(expression);
            } else {
                // If the character is an operand, push it to stack
                stack.push(c);
            }
        }

        // The final expression in stack is the required infix expression
        return stack.pop();
    }
}
//TC - O(n)
//SC - O(n)