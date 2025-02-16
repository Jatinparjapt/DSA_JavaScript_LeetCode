/**
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
 Output: [[0,0,0]]
 Explanation: The only possible triplet sums up to 0.
  */

// function threeSum(nums){
//     let resultArr = []
//     for(let i = 0 ; i<nums.length; i++){
//         let num1 = nums[i] , num2 = nums[i], num3 = nums[i]
//         let tempArr = []
//         if((num1 !== num2) || (num1 !== num3) || (num2 !== num3)){
//           let result =   (num1 + num2 + num3) === 0 
//          tempArr.push(num1)
//          tempArr.push(num2)
//          tempArr.push(num3)
//         }
//         else{
//             num1 = nu
            
//         }
//         if(tempArr){
//             resultArr.push(tempArr)
//             tempArr = []
//         }
//     }
// }
// function threeSum(nums) {
//     const result = [];
//     // Sort the array to simplify handling duplicates and use two pointers
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < nums.length - 2; i++) {
//         // Skip duplicate values for the current fixed element
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 left++;
//                 right--;

//                 // Skip duplicates for the left pointer
//                 while (left < right && nums[left] === nums[left - 1]) left++;
//                 // Skip duplicates for the right pointer
//                 while (left < right && nums[right] === nums[right + 1]) right--;
//             } else if (sum < 0) {
//                 left++; // Increase the left pointer to move closer to 0
//             } else {
//                 right--; // Decrease the right pointer to move closer to 0
//             }
//         }
//     }

//     return result;
// }

// // Example Usage:
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

/**Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2). */
function threeSumTarget(nums){
    if(nums.length<3){
        return nums
    }
    let preResult = 0;
    for(let i = 0 ; i<nums.length;i++){
        let sum = nums[i] + nums[i+1] + nums[nums.length-1 -i]
        if(sum < target) {
            if(preResult <sum)
            preResult = sum
        }
        
    }
}


var plusOne = function(digits) {
    // const result = digits[digits.length-1]+1
    // if(result >9){
    //    let temp =  result.toString()
    //    if(digits.length <temp.length){
    //        digits.unshift(Number(temp[0]))
    //        digits[digits.length-1] = Number(temp[1]) 
    //    }
    // }else{

    //     digits[digits.length-1] = result
    // }
    // return digits

    let result = []
    let joinDigitsArr = digits.join("")
    let sum = BigInt((joinDigitsArr) + 1).toString()
    for(let i = 0 ; i<sum.length ;i++){
       result.push(BigInt(sum[i]))
    }
    return result
    

};
let arr = [2,4,6,7,9]
console.log(plusOne(arr))
