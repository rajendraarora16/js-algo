// Question of 3sum leet question..

const pointerTechnique = (arr) => {

  arr.sort((a, b) => a - b);

  let answer = [];

  for (let i = 0 ; i < arr.length - 2 ; i++) {

    // skip duplicate for the first number
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }


    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {

      let total = arr[i] + arr[left] + arr[right];

      if (total == 0) {
        answer.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }

      else if (total < 0) {
        left++;
      } 
      else {
        right++;
      }
    }
  }
  
// answer;
  let unique = [];
  let seen = new Set();

  for (let ch of answer) {
    let key = ch.join(',');

    if (!seen.has(key)) {
      seen.add(key);
      unique.push(ch);
    }
  }

  return unique;
}

const arr = [-1, 0, 1, 2, -1, -4];
console.log(pointerTechnique(arr));


// 1st Step:
// ---------
  
// -4  -1    -1    0     1     2
//  i  leftP                 rightP    = i + leftP + rightP = Not making "0"

// -4  -1    -1    0     1     2
//  i       leftP            rightP    = i + leftP + rightP = Not making "0"

// -4  -1    -1    0     1     2
//  i             leftP      rightP    = i + leftP + rightP = Not making "0"

// -4  -1    -1    0     1     2
//  i                  leftP  rightP    = i + leftP + rightP = Not making "0"
