let findMedianSortedArrays = function(nums1, nums2) {
    let finalArr = nums1.concat(nums2);
    let midElem = 0;
    let midElemLength = 0;

    finalArr.sort((a, b) => (a-b));
    let mid = Math.floor(finalArr.length / 2);
    
    if (finalArr.length % 2 == 0) {
        midElem = (finalArr[mid] + finalArr[mid - 1]);
        midElemLength = 2;
    } else {
        midElem = finalArr[mid];
        midElemLength = 1;
    }
    return midElem / midElemLength;
};