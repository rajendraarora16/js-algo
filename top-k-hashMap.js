/**
 * 
 * Find the topK element occurred the most
 * 
 * Given array [1, 1, 1, 2, 2, 3] and k = 2
 * 
 * 1 is occurred 3 times
 * 2 is occurred 2 times
 * 3 is occurred 1 time
 * 
 * [1, 3], [2, 2], and [3, 1]
 * k = 2
 * [1, 3], [2, 2]
 * 
 * = [1, 2] is the output..
 * 
 */

const findTopK = (arr, k) => {

  let count = 1;
  let hashMap = {};

  for (let item of arr) {
    
    if (item in hashMap) {
      hashMap[item]++;
    } else {
      count = 1;
      hashMap[item] = count;
    }
  }

  const entries = Object.entries(hashMap);

  entries.sort((a, b) => b[1] - a[1]);

  const topK = entries.slice(0, k).map(item => Number(item[0]));
  return topK;
}


let arr = [1, 1, 1, 2, 2, 3];
let k = 2;
console.log(findTopK(arr, k));
