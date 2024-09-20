// reverse a stack 
/*
input - 3,2,1,7,6
output - 6,7,1,2,3
*/

class Solution {
    // Function to reverse a stack using recursion
    reverse(St) {
        // Base case: if the stack is empty
        if (St.length === 0) {
            return;
        }

        // Pop the top element from the stack
        let topElement = St.pop();

        // Recursively reverse the remaining stack
        this.reverse(St);

        // Use a queue to store the elements in reverse order
        this.enqueue(St, topElement);
    }

    // Helper function to enqueue elements back to the stack
    enqueue(St, element) {
        // Base case: if the stack is empty
        if (St.length === 0) {
            St.push(element);
            return;
        }

        // Pop the top element from the stack
        let topElement = St.pop();

        // Recursively call enqueue to reverse the stack
        this.enqueue(St, element);

        // Push the top element back onto the stack
        St.push(topElement);
    }
}

