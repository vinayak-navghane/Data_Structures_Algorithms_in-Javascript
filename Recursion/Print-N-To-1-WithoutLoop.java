/*
Print N to 1 without loop
Input:
N = 10
Output: 10 9 8 7 6 5 4 3 2 1
*/

class Solution {

 void printNos(int N) {
        if(N==1){
            System.out.print(1);
            return;
        }
        
        System.out.print(N+" ");
        printNos(N-1);
    }
}

// nevermind above code is in java
// TC- O(n)
