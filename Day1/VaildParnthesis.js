/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true
 */


// function validParentheses(s){
//     const brackets = {
//       "(":")",
//       "[":"]",
//       "{":"}"
//     }
//     if(s.length<=0)return
// let array = []
// let result = []
//     for(let i =0;i<s.length;i++){
//       if( brackets.hasOwnProperty(s[i])){
//         // console.log(s[i], "log")
//         array.push(s[i])
//         console.log(array, "arra")
//         result.push(brackets[s[i]])
//       }
//       if(!s.includes[result[i]]){
//         return false
//       }
       
//     }
//     return true

// }
// let s = "()[]{}"
// console.log(validParentheses(s))

function validParentheses(s) {
  const brackets = {
      "(": ")",
      "[": "]",
      "{": "}"
  };
  
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    
      let char = s[i];
      console.log(char, "char s[i")
      
      if (brackets[char]) {
          // If the character is an opening bracket, push to stack
          console.log(stack , "inside first if ")
          stack.push(char);
      } else {
          // If the character is a closing bracket, check the stack
          let lastOpeningBracket = stack.pop();
          console.log(lastOpeningBracket, "inside else")
          if (brackets[lastOpeningBracket] !== char) {
              return false;
          }
      }
  }
  
  // In the end, the stack should be empty if all brackets are matched
  return stack.length === 0;
}

// Test cases
let s1 = "()";
let s2 = "()[]{}";
let s3 = "(]";
let s4 = "([])";

console.log(validParentheses(s1)); // true
console.log(validParentheses(s2)); // true
console.log(validParentheses(s3)); // false
console.log(validParentheses(s4)); // true
