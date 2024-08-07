/*
189. Rotate Array - Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
solution- 
*/

function reverseNum(nums,start, end){
   while(start<end){
       [nums[start],nums[end]] = [nums[end],nums[start]];
       start++;
       end--;
   }
}


var rotate = function(nums, k) {
   k = k % nums.length;


   nums.reverse();
   reverseNum(nums,0,k-1);
   reverseNum(nums,k,nums.length-1);


};


/*
[1,2,3,4,5,6,7]
1st -> arr reverse (0 to n-1) [7,6,5,4,3,2,1]
2nd -> arr swap    (0 & k-1)  [5,6,7,4,3,2,1]                 
3rd -> arr swap    (k & n-1)  [5,6,7,1,2,3,4] 
                      
*/    
// TC- O(n)
