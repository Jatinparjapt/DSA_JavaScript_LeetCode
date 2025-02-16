/**
 *  Longest Substring Without Repeating Characters
Medium
Topics
Companies
Hint
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring
 */

function longestSubString(str){
   const splitStr = str.split('')
   let endIndex = 0
   let startIndex = 0
//    console.log(splitStr, "s;it")
  for (let i = 0; i < splitStr.length; i++) {
   for(let j = 1 ; j<splitStr.length ; j++){
    if(splitStr[i] == splitStr[j]){
        // result += splitStr[j]
        startIndex = i
        endIndex = j
        break;
    }
   } 
   break;
  }
// console.log(startIndex ,endIndex ,"inde")
  let result = str.slice(startIndex,endIndex)
//    console.log(result , "result")
  return result
   


}
const str1 = "pwwkew"
console.log(longestSubString(str1))