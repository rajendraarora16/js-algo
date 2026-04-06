const getRes = (arr) => {

  let stack = [];

  // let's make default behavior of each response in result as -1 value.
  let result = Array.from({ length: arr.length }, (_item, _index) => -1);
  

  // reverse array ..
  for (let i = arr.length - 1; i >= 0; i--) {
    
    // pop the stack if current value is greater last stack's value of an array..
    while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return result;
}


const arr = [5, 1, 9, 2, 6];
// Input:
// [5, 1, 9, 2, 6]


// Output:
// [9, 9, -1, 6, -1]

console.log(getRes(arr));
