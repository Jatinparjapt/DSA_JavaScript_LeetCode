/**
 * Search Insert Position
Easy
Topics
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 */

// my solution i used to solve 
function searchInsert(nums, target){
    for(let i = 0 ; i<nums.length;i++){
        if(nums[i]=== target){
            console.log("first")
            return i
        }if(nums[i]<target && nums[i+1]>target){
            console.log("second")
            return i+1
        }if(target>nums[nums.length-1]){
            console.log("thisrd")
            return nums.length 
        }
    }
}

/** best solution ****
 *     let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;

 */
let nums =[1,3,5,6], target = 4
console.log(searchInsert(nums, target))