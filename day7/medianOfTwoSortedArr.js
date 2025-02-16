/**
 *  Median of Two Sorted Arrays
Hard
Topics
Companies
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */


function medianSortedArray(nums1, nums2) {
    console.log("nums1:", nums1, "nums2:", nums2); // Debugging input values

    if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
        throw new TypeError("Both inputs must be arrays");
    }

    let mergeArr = [...nums1, ...nums2];
    mergeArr.sort((a, b) => a - b);

    let len = mergeArr.length;
    let median;

    if (len % 2 === 0) {
        median = (mergeArr[len / 2 - 1] + mergeArr[len / 2]) / 2;
    } else {
        median = mergeArr[Math.floor(len / 2)];
    }

    console.log(median, "Median");
    return median;
}

let num1 = [1,2]
let num2 = [3]
console.log(medianSortedArray(num1 ,num2))