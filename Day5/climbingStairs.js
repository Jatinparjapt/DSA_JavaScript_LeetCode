/**
 * 70. Climbing Stairs
Attempted
Easy
Topics
Companies
Hint
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

function climbStairs(n) {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    
    let first = 1;
    let second = 2;
    
    for (let i = 3; i <= n; i++) {
      let third = first + second;
      console.log(third ,"third")
      first = second;
      console.log(first , "first")
      second = third;
      console.log(second , "second")
    }
    
    return second;
  }
  
  // Test cases
//   console.log(climbStairs(2)); // Output: 2
  console.log(climbStairs(3)); // Output: 3
//   console.log(climbStairs(4)); // Output: 5
//   console.log(climbStairs(5)); // Output: 8
  