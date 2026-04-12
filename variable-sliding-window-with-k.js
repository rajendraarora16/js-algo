const variableSlidingWindow = (arr, k) => {
  
  let left = 0;
  let right = 0;
  
  let maxCount = 0;
  let hashMap = {};
  let typesCount = 0;

  while (right < arr.length) {

    if (typesCount < k || arr[right] in hashMap) {

      if (!hashMap[arr[right]]) {
        typesCount++;
        hashMap[arr[right]] = 1;
      }
      else {
        hashMap[arr[right]]++;
      }

      maxCount = Math.max(maxCount, right - left + 1);

      right++;
    }

    else {

      hashMap[arr[left]]--;

      if (hashMap[arr[left]] === 0) {

        typesCount--;
        delete hashMap[arr[left]];
      }
      left++;
    }
  }

  return maxCount;
}

const str = "araaci";
const k = 2
console.log(variableSlidingWindow(str, k));
// 4



// find longest sub array with sum <= k


const variableSlidingWindow = (arr, k) => {

  let left = 0;
  let right = 0;
  let maxCount = 0;
  let sum = 0;

  while (right < arr.length) {

    sum += arr[right];

    while (sum >= k) {
      sum -= arr[left];
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);

    right++;
  }

  return maxCount;
}

const arr = [1, 2, 1, 0, 1, 1, 0];
const k = 4;

console.log(variableSlidingWindow(arr, k));
