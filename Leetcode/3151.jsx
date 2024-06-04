// An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

 

// Example 1:

// Input: nums = [1]

// Output: true

// Explanation:

// There is only one element. So the answer is true.

// Example 2:

// Input: nums = [2,1,4]

// Output: true

// Explanation:

// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

// Example 3:

// Input: nums = [4,3,1,6]

// Output: false

// Explanation:

// nums[1] and nums[2] are both odd. So the answer is false.

 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//SOLUTION
var isArraySpecial = function (nums) {
    //create a variable for stack
    let stack = [];
    //iterate through nums starting at the beginning 0
    for (let i = 0; i < nums.length; i++) {
        //if stack is empty push elm from nums into stack
        if (!stack.length) {
            stack.push(nums[i])
        }// if top of stack is even && nums[i] === odd... push nums[i] into stack
         let topStack = stack[stack.length - 1]
        if (topStack % 2 === 0 && nums[i] % 2 === 1 || topStack % 2 === 1 && nums[i] % 2 === 0) {
            stack.push(nums[i])
        }
    }
    return stack.length === nums.length ? true : false
};