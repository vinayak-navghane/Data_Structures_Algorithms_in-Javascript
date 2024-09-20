// reverse a stack 
/*
input - 3,2,1,7,6
output - 6,7,1,2,3
*/

class Solution {
    // Function to reverse a stack using recursion
    reverse(St) {   // O(n)
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
    enqueue(St, element) { //O(n^2)
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

//TC - O(n^2)
//SC - O(n)


/*
Let's take a quick example to see how the elements are reordered in a queue-like manner:

Initial Stack: [3, 2, 1, 7, 6]
Reverse Process:
Pop 6 → Remaining: [3, 2, 1, 7]
Pop 7 → Remaining: [3, 2, 1]
Pop 1 → Remaining: [3, 2]
Pop 2 → Remaining: [3]
Pop 3 → Remaining: []
Enqueue Process:
Push 3 to empty stack: [3]
Push 2 under 3: [2, 3]
Push 1 under 2, 3: [1, 2, 3]
Push 7 under 1, 2, 3: [7, 1, 2, 3]
Push 6 under 7, 1, 2, 3: [6, 7, 1, 2, 3]
Thus, by recursively removing elements and placing them back in a specific order, the code effectively mimics the behavior of a queue to reverse the stack.
*/