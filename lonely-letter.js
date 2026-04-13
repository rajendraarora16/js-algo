
const isAlphabet = (str) => {

  for (let char of str) {

    if ((char >= "a" && char <= "z") || char == "") {
      return true;
    }    
  }
  return false;
}

const getSol = (str) => {

  let hashMap = {};
  let count = 0;
  str = str.toLowerCase();

  for (let char of str) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    }
    else {
      hashMap[char]++;
    }
  }

  for (let char in hashMap) {

    let charCode = char.charCodeAt(0);
    let beforeChar = String.fromCharCode(charCode - 1);
    let afterChar = String.fromCharCode(charCode + 1);

    if (isAlphabet(char) && !hashMap[beforeChar] && !hashMap[afterChar] && hashMap[char] == 1 ) {
      count++;
    }
  }

  return count;
}

console.log(getSol("ace"));
// 3 output
// { a: 1, c: 1, e: 1 }
// so each value is 1 and there is no neighbour character of each string. That's why the output is 3.
