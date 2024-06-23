// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

//SOLUTION
var nextGreatestLetter = function (letters, target) {
    // set left = 0 , right = last index
    let left = 0;
    let right = letters.length - 1;
    // while left <= right:
    while (left <= right) {
        // find the mid index and mid value
        //  mid = Math.floor((left + right) / 2);
        let mid = Math.floor((left + right) / 2);
        //  midVal = letters[mid];
        let midVal = letters[mid];
        // if mid val <= target:
       if (midVal <= target) {
            // left = mid + 1;
            left = mid + 1
        }// else (by logic mid val > target):
        else{
            // right = mid - 1;
            right = mid - 1
        }
    }
     return letters[left] || letters[0]
};