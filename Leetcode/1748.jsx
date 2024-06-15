// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//SOLUTION
var sumOfUnique = function(nums) {
    //Sort array, which will essentially place all duplicates next to its corresponding twin
    nums = nums.sort((a,b) => a - b)
    console.log(nums)
    //create a variable (sum) to keep track of the sum of the unique elms seen in the array
    let sum = 0
    //iterate using for loop 
    for(let i = 0; i < nums.length; i++){
    //if elm at index[i] is not equal to elm at index[i] + 1
    if(nums[i] != nums[i+1] & nums[i] != nums[i-1]){
    //add index[i] to sum 
    sum += nums[i]
    console.log(sum)
    }
    //else if all the elms in the array are the same 
    // return sum = 0
    }
    
    return sum
        
    };