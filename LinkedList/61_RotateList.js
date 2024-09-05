//61. Rotate List
/*
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]

*/


var rotateRight = function (head, k) {
    if (head == null) return null

    let len = 1
    let tail = head

    while (tail.next != null) {
        len++
        tail = tail.next
    }

    tail.next = head
    let count = len - (k % len)

    while (count > 0) {
        head = head.next
        tail = tail.next
        count--
    }

    tail.next = null
    return head
};
//TC - O(n)
//SC- O(1)