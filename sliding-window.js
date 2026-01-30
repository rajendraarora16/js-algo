function maxSumArr(arr, size) {

    let arrSumTemp = 0;
    let maxSumSeen = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        arrSumTemp += arr[i];

        if (i >= (size - 1)) {
            maxSumSeen = Math.max(arrSumTemp, maxSumSeen);
            arrSumTemp -= arr[i - (size - 1)];
        }
    }
    return maxSumSeen;
}

let arr = [1, 2, 3, 5, 4, 8, 6, 2];
let size = 3;

console.log(maxSumArr(arr, size))
// 18 output

/**
 * Learnt from this youtube link:
 * https://www.youtube.com/watch?v=JWHjqjk9ZYc
 */



// using 2 loop which can solve most of the problems:



const windowSlidingTech = (arr, k) => {
    let count = 0;
    let maxSeen = -Infinity;

    // fist slide
    for (let i = 0 ; i < k ; i++) {
      count += arr[i];
    }

    maxSeen = count;

    // move to another slide..
    for (let i = k ; i < arr.length ; i++) {

      count += arr[i];
      count -= arr[i - k];

      maxSeen = Math.max(maxSeen, count);
    }

    return maxSeen;
}

const arr = [1, 2, 3, 5, 4, 8, 6, 2];
const k = 3;

console.log(windowSlidingTech(arr, k));
// output = 18

// algorithm wise it is O(n) linear.. first loop k times, second n-k times.. k + (n - k) = n it is efficient 



const slidingWindowTech = (str) => { 
  
  let left = 0;
  let maxSeen = -Infinity;
  let set = new Set();


  for (let  right = 0  ; right < str.length ; right ++) {

    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    maxSeen = Math.max(maxSeen, (right - left) + 1);
    set.add(str[right]);
  }
  return maxSeen;
}

const str = "abcabcbb";
console.log(str)
console.log(slidingWindowTech(str));
