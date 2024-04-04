// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function (s, t) {
    let index = -1;
    for (let i = 0; i < s.length; i++) {
        index = t.indexOf(s[i], index + 1);
        // indexOf()-index of first parameter
        // second parameter which specifies the position at which to start the search. When provided, indexOf() will start searching from that position onwards.
        if (index === -1) {
            return false;
        }
    }
    return true;
}