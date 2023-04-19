/**
 * Given an array, find the most duplicate occuring value.
 */

let arr = ["a", "b", "c", "b", "a", "a"]
let hashMap = {};

arr.forEach(value => {
  
  if (value in hashMap) {
    hashMap[value]++;  
  } else {
    hashMap[value] = 0;
  }
  return hashMap;
});

console.log(hashMap);

let keyValRes = Object.values(hashMap);
let result = keyValRes.sort(function(a, b) { return b - a })[1];
console.log(result);
