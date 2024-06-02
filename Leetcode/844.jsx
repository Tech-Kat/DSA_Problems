// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

//SOLUTION
var backspaceCompare = function (s, t) {
    s = s.split("")
    t = t.split("")
    let stack = []
    let stack2 = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] != "#") {
            stack.push(s[i])
        } else {
            stack.pop(s[i])
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] != "#") {
            stack2.push(t[i])
        } else {
            stack2.pop(t[i])
        }
    }

    return stack.join(" ") == stack2.join(" ") ? true : false
};