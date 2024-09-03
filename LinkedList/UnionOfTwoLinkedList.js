/*
Given two linked lists (L1 & L2), your task is to complete the function makeUnion(), which returns the union list of two linked lists. This union list should include all the distinct elements only and it should be sorted in ascending order.
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

    makeUnion(head1, head2) {
        let mySet = new Set();

        let temp = head1
        while (temp) {                   //O(n)
            mySet.add(temp.data)
            temp = temp.next
        }

        temp = head2
        while (temp) {                 //O(m)
            mySet.add(temp.data)
            temp = temp.next
        }

        let arr = Array.from(mySet).sort((a, b) => a - b) // O((n+m) * log(n+m)).

        let unionHead = new Node(arr[0])
        let unionTail = unionHead

        for (let i = 1; i < arr.length; i++) {   //O(n+m).
            unionTail.next = new Node(arr[i])
            unionTail = unionTail.next
        }
        return unionHead;
    }
}

/*
1. create a set
2. add list 1 to set
3. add list 2 to set
4. convert the set to an array and sort it in ascending order
5. create a new linked list starting with the first element in the sorted array
6. add remaining array elements to linked list

*/
//TC - O((n+m) * log(n+m))
