/* 
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> (RETAw + wATER )
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.
 */

/*
s1 = "F,i, z ,Z";  output = "Z, z, i, F" RETURN S1.REVERSE()
s2 = "b,u,Z,Z";
Output = "zzUB@@@zZIffIZz"
   */

//SOLUTION

function reverseAndMirror(s1,s2) { 
    let s1Reversed = s1.split("").reverse().join("");
    let s2Reversed = s2.split("").reverse().join("");
    
    let str = `${s2Reversed}@@@${s1Reversed}${s1}`
      str = str.split("")
      
    let string = str.map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    
      return string.join("");
    }