// Given string "aaAAbbCCddd"
// Make an output like this way.. "a2A2C2d3"

// 1st approach..

const checkStringLength = (str) => {
    let result = "";
    let count = 1;

    for (let i = 0 ; i < str.length ; i ++) {

        if ( str[i] === str[ i + 1 ] ) {
            count++;
        } 
        else {
            result += str[i]+""+count;
            count = 1;
        }
    }

    return result;
}

console.log(checkStringLength(str)); // 'a2A2b2C3d3'



// 2nd approach..

const reduceResp = arr.reduce((acc, currentValue) => {

    if(currentValue in acc) {
        acc[currentValue]++;
    } else {
        acc[currentValue] = 1;
    }
    return acc;
}, {});


console.log(reduceResp) // { a: 2, A: 2, b: 2, C: 2, d: 3 }

let result = [];
for (const [key, value] of Object.entries(foo)) {
    result.push(key, value);
}

console.log(result.join('')) // 'a2A2b2C2d3'


/*reverse question*/
const isNumber = (char) => {
  if (char >= '0' && char <= '9' && char !== '') return true;
  return false;
}

const performOperationg = (str) => {
  let num = 1;
  let result = '';

  for (let i = 0 ; i < str.length ; i++) {
    
    if (isNumber(str[i])) {
      num = str[i];
    }
    else {
      result += Array.from({ length: Number(num) }, (_) => str[i]).join('');
    }
  }

  return result;
};
 
console.log(performOperationg('2b9c332a')); // bbcccccccccaa
