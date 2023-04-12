/**
 * Remove duplicate elements from array
 */
let arr = ["a", "b", "c", "b", "a", "a"]
let hashMap = {};
let result = [];

arr.forEach(value => {
  
  if (value in hashMap) {
    hashMap[value]++;  
  } else {
    result.push(value);
    hashMap[value] = 0;
  }
  return hashMap;
});
console.log(hashMap);
console.log(result);


let arr2 = ["a", "b", "c", "b", "a", "a"];
let result2 = [...new Set(arr2)];
console.log(result2);


/**
 * Using Filter way
 */
let arr3 = ["a", "b", "c", "b", "a", "a"];
let res3 = arr3.filter((item, index) => arr3.indexOf(item) === index);
console.log(res3);
