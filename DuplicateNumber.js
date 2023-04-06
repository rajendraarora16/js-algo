let arr = [1,2,3,1];

/* 1st Approch */
let detectDuplicate = function(arr) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            return true;
        }
    }
    return false;
}
console.log(detectDuplicate(arr));



/* 2nd Approach */
let arr2 = [1,2,3,1];
let duplicateHashMap = function(arr2) {
  let hashMap = {};
  let result;
  const res = arr2.forEach(num => {
    if (hashMap[num] === true)
      return result = hashMap[num];
    hashMap[num] = true;
  });

  return result;
}
console.log(duplicateHashMap(arr2));


/* 3rd Approach */
let arr3 = [1,2,3,1];
let duplicateHashMap2 = function(arr) {
  let hashMap = {};
  let result = [];

  let res = arr.forEach(num => {
    if (hashMap[num]) {
      result.push(num);
    }
    else {
      hashMap[num] = true;
    }
  });

  return result;
}
console.log(duplicateHashMap2(arr3));
