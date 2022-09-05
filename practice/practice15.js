/**
 * Median leetcode problem
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *   
 *   The overall run time complexity should be O(log (m+n)).
 * 
 *   Example 1:
 * 
 *   Input: nums1 = [1,3], nums2 = [2]
 *   Output: 2.00000
 *   Explanation: merged array = [1,2,3] and median is 2.
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let finalArr = nums1.concat(nums2);
    let midElem = 0;
    let midElemLength = 0;

    finalArr.sort((a, b) => (a-b));
    let mid = Math.floor(finalArr.length / 2);
    
    /**
     * Let's say if we have an array elements
     * arr = [1, 3, 4, 5] then it will go to 
     * 'if' condition if we have elements
     * arr = [1, 3, 4, 5, 6] then it will go to 
     * 'else' condition.
     */
    if (finalArr.length % 2 == 0) {
        midElem = (finalArr[mid] + finalArr[mid - 1]);
        midElemLength = 2;
    } else {
        midElem = finalArr[mid];
        midElemLength = 1;
    }
    return midElem / midElemLength;
};

let nums1 = [1, 3], nums2 = [2, 7];
console.log(findMedianSortedArrays(nums1, nums2));

// 4 + 9 = 13/4 =  