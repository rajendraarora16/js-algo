/**
 * 1st Approach
 */
const isAnagram = (str1, str2) => {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
};
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('they see', 'the eyes'));
console.log(isAnagram('node', 'deno'));




/**
 * 2nd approach
 */
var isAnagram2 = function(s, t) {
    let arrS = [], arrT = [];

    if(s.length === t.length) {
        for(let i = 0; i < s.length; i++) {
            arrS.push(s[i]);
            arrT.push(t[i]);
        }

        arrS.sort();
        arrT.sort();

        let isArrMatched = arrS.every((s, i) => {
            return s == arrT[i];
        });
        return isArrMatched;
    }

    return false;
};

console.log("car".charAt(1));

console.log(isAnagram2('car', 'rca'))


