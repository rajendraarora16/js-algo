
const isAlphabet = (char) => {
  return char.length === 1 && ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'));
}

const reverseStr = (str) => {
    let arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

    
    while (left < right) {
      
      if (isAlphabet(arr[left]) && isAlphabet(arr[right])) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }

      else if (!isAlphabet(arr[left]) ) {
        left++;
      }
      else {
        right--;
      }
    }

    return arr.join("");
}

const str = "RAJ-ENDRA-ERMR";
console.log(reverseStr(str)) // 'RMR-EARDN-EJAR'

