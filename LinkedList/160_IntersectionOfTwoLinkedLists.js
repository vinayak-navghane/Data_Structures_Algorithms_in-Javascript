// 160. Intersection of Two Linked Lists
/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
*/
//Brute force - 


var getIntersectionNode = function (headA, headB) {
    let mySet = new Set()

    let temp = headA
    while (temp) {        //O(n * 1)
        mySet.add(temp)
        temp = temp.next
    }

    temp = headB
    while (temp) {        //O(m * 1)
        if (mySet.has(temp)) {
            return temp
        }
        temp = temp.next;
    }
    return null
};

// TC - O(n + m)
// SC - O(n)