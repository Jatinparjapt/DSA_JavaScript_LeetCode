/**
 * Given a string s, find the length of the longest 
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
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */


function longestSubString (str){
   let obj = []
   for (let i = 0; i < str.length; i++) {
    if(!obj.includes(str[i]))
      obj.push(str[i])
   }
   console.log(obj, "inswz.EE")
//    for(let j = 0 ; j<indexArr.length; j++){
//     let spliceStr = str.slice(0,indexArr[j])
//     let result = removeDuplicate(spliceStr)
//     if(spliceStr.length === result.length){
//         return result
//     }
//    }
  let result = obj.join('')
   return result
}
// function removeDuplicate(str){
//     let splitStr = str.split('')
//     let result = [...new Set(splitStr)]
//     let finalResult = result.join('')
//     return finalResult
// }
// let demoStr = "pwwkew"
// console.log(longestSubString(demoStr))





var merge = function(nums1, m, nums2, n) {
    if(m<1){
        return nums2
    }else if (n<1){
        return nums1
    }
    nums1.filter((a)=>{
        if(a !== 0 ){
            return a
        }
    })
    nums2.filter((b)=>{
        if(b !== 0 ){
            return b
        }
    })
    // console.log(nums1Filter, "filter")
    let mergeArr = [...nums1 , ...nums2]
    let result = mergeArr.sort((a,b)=> a-b)
    return result
};   

let  nums1 = [0], m = 1, nums2 = [1], n = 1
 console.log(merge(nums1,m ,nums2,n) , "return")