// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.
    
var commonChars = function (words) {
    const result = [];
//We go through each letter of the first word.
   for (const elm of words[0]) {
    // If a letter is in all words,
       if (words.every(word => word.includes(elm))) {
        //we add it to the result array
           result.push(elm);
           //take it out from all words.
           words = words.map(word => word.replace(elm, '')); 
       }
   }

   return result;
   
};

//LINE 39 reasoning
// After finding a common character, we want to ensure that we don't count it again in subsequent iterations, as we're looking for common characters across all words, not just in the first word.
// By removing the found character from all words, we prevent it from being counted again.
// This line effectively updates the words array by replacing occurrences of the found character with an empty string in each word, using the replace() method.
// As a result, when we iterate through the characters of the first word again, we won't count characters that have already been found and removed from all words.
// Overall, this step ensures that we accurately identify only the common characters across all words.
  



    // let arr = words[0].split("")
    // // console.log(arr)
    // let result = []

    // for (let i = 0; i < arr.length; i++) {
    //     let common = true
    //     for (let j = 1; j < words.length; j++) {
    //         //  console.log(words[j])
    //         if (!words[j].includes(arr[i])) {
    //             common = false
    //             // result.push(arr[i])
    //             // j++
    //         }
    //     }
    //     if (common) {
    //         result.push(arr[i]); // If the character is common to all words, add it to the result
    //     }
    // }

    // return result