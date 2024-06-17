// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

 

// Example 1:

// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:

// Input: s = "s"
// Output: "s"

//SOLUTION
var makeGood = function (s) {
    // initialize stack
    let stack = []
    //loop through the string using a for of loop, this eliminates the need to do .split() on the string
    for (const char of s) {
        // if the stack empty OR if the char is not the same char on top of stack (when char and char in stack are both upper case ) 
        if (!stack.length || !(char !== stack[stack.length - 1] && stack[stack.length - 1].toUpperCase() === char.toUpperCase())) {
            //then add the char to the stack
            stack.push(char)
        }
        else {
            //else remove the char if they are the same letters 
            stack.pop()
        }
    }
    // convert stack into string and return
    return stack.join("")
};     