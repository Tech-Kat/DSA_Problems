// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {  
    //It initializes an empty obj called charCount 
    //to keep track of the count of each character in the string.
        const charCount = {};
    //It iterates through the input string s and populates the charCount object 
    //with the count of each character encountered.
      for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
      }
    // After counting the characters, it iterates through the string again and 
    //checks if the count of the character at the current index is equal to 1.
      for (let i = 0; i < s.length; i++) {
    // If it is, it means that the character is unique in the string, so it returns the index of that character.
        if (charCount[s[i]] === 1) {
          return i;
        }
      }
    // If no unique character is found in the string, it returns -1.
      return -1;
    };