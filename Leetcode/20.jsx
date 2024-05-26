// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//SOLUTION
var isValid = function (s) {
    let obj = {
        "(":")",
        "[":"]",
        "{":"}",
    }
    let stack = [];

for(char of s){
    if(obj[stack[stack.length-1]] === char){
         stack.pop()
    }else{
     stack.push(char)
    }
}
return stack.length === 0
};