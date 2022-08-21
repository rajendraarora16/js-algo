/**
 * 
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Example 2:

    Input: strs = [""]
    Output: [[""]]
    Example 3:

    Input: strs = ["a"]
    Output: [["a"]]
 */

let sortJointFun = function(str) { 
    return str && str.split('').sort().join('');
}

let groupAnagrams = function(strs) {
    
    let hashMapUh = {};
    
    if(strs == "" || strs.length === 0) {
        return [[""]];
    }
    
    for (let i = 0; i < strs.length; i++) {
        
        let elm = strs[i];
        let sortedElm = sortJointFun(strs[i]);
        
        console.log(elm);
        console.log(sortedElm);
        
        if(hashMapUh[sortedElm]) {
            hashMapUh[sortedElm].push(elm);
        } else {
            hashMapUh[sortedElm] = [elm];
        }
    }
    return Object.values(hashMapUh);
};




let arr = ["eat","tea","tan","ate","nat","bat"];
console.log(arr.indexOf('eat'));

console.log(arr[0].split('').sort().join(''));

console.log(arr);

console.log(groupAnagrams(arr));


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue, index) => {
    
    console.log(currentValue)
},
  []
);

console.log(sumWithInitial);