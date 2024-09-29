/*
Middle of a Linked List - 
Given the head of a linked list, the task is to find the middle. For example, the middle of 1-> 2->3->4->5 is 3. If there are two middle nodes (even count), return the second middle. For example, middle of 1->2->3->4->5->6 is 4.
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

//brute force 

class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node) {

        if (node == null) return -1

        let listLength = 0
        let current = node

        while (current) {
            listLength++
            current = current.next
        }

        let midElementIndex = Math.floor(listLength / 2)

        let midElement = node

        while (midElementIndex > 0) {
            midElement = midElement.next;
            midElementIndex--
        }

        return midElement.data
    }
}
//TC - O(n)

// using fast & slow pointer
class Solution {
    /* Should return data of middle node.
    If linked list is empty, then  -1*/
    getMiddle(node) {
        if (node == null) return -1

        let fast = node
        let slow = node

        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow.data
    }
}

/*
1 -> 2 -> 3 -> 4 -> 5
                    f
          s
*/
// TC - O(n)