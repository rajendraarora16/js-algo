/**
 * For example:
 * Input 
 * String 1 = "I love programming, pizza, coke and chips"; 
 * String 2 = "I programming, chips"; 
 * 
 * Required Output 
 * Missing words = "love pizza coke";
 */

let missingWords1 = function (S, T) {
  let result = [];
  let string1 = S.split(' ');
  let string2 = T.split(' ');

  for (let i = 0; i < S.length; i++) {
    if (string1[i] !== string2[i - result.length]) {
      result.push(string1[i]);
    }
  }

  return result;
}
 
console.log(missingWords1('I love programming, pizza, coke and chips', 'I programming, chips'));
// [ 'love', 'pizza,', 'coke', 'and' ]



/**
 * Approach 2 
 */
let missingWords2 = function (S, T) {
  let result = [];
  let string1 = S.split(' ');
  let string2 = T.split(' ');

  let j = 0;
  for (let i = 0; i < S.length; i++) {
    if (string1[i] !== string2[j]) {
      result.push(string1[i]);
    } else {
      j++;
    }
  }
  return result;
}

console.log(missingWords2('I love programming, pizza, coke and chips', 'I programming, chips'));
