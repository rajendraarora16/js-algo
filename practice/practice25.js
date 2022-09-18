let reverseNum = function(num) {
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse = (reverse * 10) + digit;
    num = parseInt(num / 10);
  }

  return reverse;
}

console.log(reverseNum(12345))
