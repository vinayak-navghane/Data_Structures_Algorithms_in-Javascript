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