// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

// Constraints:

// n == names.length == heights.length
// 1 <= n <= 103
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 105
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.

//SOLUTION JAVASCRIPT
var sortPeople = function (names, heights) {
    let obj = {};

    heights.forEach((key, value) => {
        obj[key] = names[value]
    })

    return keysSorted = Object.values(obj).sort((a, b) => { b - a }).reverse();

};

//SOLUTION TYPESCRIPT
function sortPeople(names: string[], heights: number[]): string[] {
    let obj: { [key: number]: string } = {};

    // Correcting the parameter order in forEach
    heights.forEach((height, index) => {
        obj[height] = names[index];
    });

    // Sorting the keys and mapping back to names
    return Object.keys(obj)
        .map(Number) // Convert keys to numbers since Object.keys returns string[]
        .sort((a, b) => b - a) // Sort heights in descending order
        .map(height => obj[height]);
};