/*
Given the head of a linked list, the task is to reverse this list and return the reversed head.

*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to reverse a linked list.
    reverseList(head) {
        let current = head
        let prev = null
        let next = null

        while (current) {
            next = current.next
            current.next = prev

            prev = current
            current = next
        }
        head = prev
        return head
    }
}


//TC - O(n)


// Using recursion - 

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to reverse a linked list.
    reverseList(head) {
        // Base case: if the list is empty or has only one node, return head
        if (head == null || head.next == null) {
            return head;
        }

        // Recursively reverse the rest of the linked list
        let newHead = this.reverseList(head.next);

        // After recursion, head.next is the last node in the reversed sublist
        // Make it point back to the current head
        head.next.next = head;

        // Set the next of the current head to null to avoid cycles
        head.next = null;

        // Return the new head of the reversed linked list
        return newHead;
    }
}

// TC - O(n)