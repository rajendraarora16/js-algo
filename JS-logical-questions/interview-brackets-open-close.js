const checkBrackets = (str) => {

  let tempArr = [];

  let charArr = str.split('');

  let obj = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (let i = 0 ; i < charArr.length ; i ++) {

    if (obj[charArr[i]]) {
      tempArr.push(charArr[i]);
    } 
    else {
      let last = tempArr.pop();
      if (obj[last] !== charArr[i]) {
        return false;
      }
    }
  }
 
  return tempArr.length === 0;
} 

const str1 = '()[]{}';
// const str2 =  "([)]";

console.log(checkBrackets(str1));

