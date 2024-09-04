//19. Remove Nth Node From End of List
/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

//brute force - 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let current = head
    let length = 0

    while (current) {   //O(n)
        length++
        current = current.next
    }

    if (length == 1 && n == 1) return null

    nodesToTraverse = length - n
    current = head

    if (nodesToTraverse >= 1) {
        while (nodesToTraverse > 1) { //O(n)
            current = current.next
            nodesToTraverse--
        }
    } else {
        head = current.next
    }
    current.next = current.next.next;

    return head;
};

//TC - O(n)


//Optimized - One Pass

/*
Approach
1.Create a dummy node and set it to point to the head of the list.
2.Initialize two pointers (first and second) to the dummy node.
3.Advance the first pointer n+1 steps ahead.
4.Move both first and second pointers until first reaches the end of the list.
5.At this point, second will be just before the node that needs to be removed. 6.Adjust the pointers to remove the target node.
7.Return the next node of the dummy node, which is the new head of the list.
*/


var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head)
    let first = dummy
    let second = dummy

    for (let i = 0; i <= n; i++) {
        first = first.next
    }

    while (first != null) {
        first = first.next
        second = second.next
    }

    second.next = second.next.next

    return dummy.next
};

//TC - O(L) where L is length of LL