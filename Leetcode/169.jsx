/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

//SOLUTION
var majorityElement = function(nums) {

    let countMap = new Map();
   
     // Iterate through the array to count occurrences of each element
     for (let num of nums) {
       countMap.set(num, (countMap.get(num) || 0) + 1);
     }
   
     // Find the majority element
     for (let [num, count] of countMap.entries()) {
       if (count > nums.length / 2) {
         return num;
       }
     }
   };
//Test