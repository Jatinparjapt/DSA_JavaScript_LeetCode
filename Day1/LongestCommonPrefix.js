/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
// my solution is not workiing becuase of wrong logic implementation
function longestCommonPrefix(arr){
    let result = ""
    for(i=0; i<arr.length ; i++){
        // console.log(arr[0][i], "accessing")
        // console.log(result, "res")
        if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] ){
            console.log(true)
        const add = arr[0][i]
        result+=add
        }else{
         return ''
        }
    }
    console.log(result )
    return result
}
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

/// correcct solution is 
function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";
    if (arr.length === 1) return arr[0];
    
    let prefix = arr[0]; // Start with the entire first string as the prefix

    for (let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1); // Reduce the prefix by one character
            if (prefix === "") return ""; // If there's no common prefix
        }
    }
    return prefix;
}

// let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"
