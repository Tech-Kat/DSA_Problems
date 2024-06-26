// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
 

// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.

//SOLUTION
var findTheDifference = function (s, t) {
    // create empty obj to hold the amount of times a letter was seen
    let obj = {};
    // combine the two strings together to get the count
    let str = s + t
    // iterate through the newly combined string(str)
    for (let i = 0; i < str.length; i++) {
        //if the letter has never been seen before to count it as its first occurrence
            if (!obj[str[i]] ) {
                obj[str[i]] = 1     
            } else {
                // else if seen before just add 1 each time its seen
                obj[str[i]]++
            }
        }
    //iterate through obj
    for (o in obj) {
        //if the value is a odd number thn return the key 
        if (obj[o] % 2 === 1) {
            console.log(obj[o])
            return o
        }
    }
};