// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

 

// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

//SOLUTION
var validateStackSequences = function (pushed, popped) {
    // initialize stack
    let stack = []
    let popIndex = 0
    let pushIndex = 0
    //loop through both arrays
    while (popIndex < popped.length) {
    let topOfStack = stack[stack.length - 1]
        //we get to the end of the push array but the top of the stack is not equal to the popped array
        //which means that we can't pop or push so return false 
        if (pushIndex === popped.length && topOfStack !== popped[popIndex]) {
            return false
        }
        if (topOfStack !== popped[popIndex]) {
            stack.push(pushed[pushIndex])
            pushIndex++
            // console.log(pushIndex)
        } else if (topOfStack === popped[popIndex]) {
            stack.pop()
            popIndex++
        }
    }
    return true
};