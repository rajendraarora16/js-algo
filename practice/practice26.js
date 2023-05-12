let reverseNum = function(num) {

  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = (reverse * 10) + digit;
    num = parseInt(num / 10);
  }
  return reverse;
}

console.log(reverseNum(1234556))


let count = 0;

let arr = [0,1,2,3,4,5,6,7];

arr.forEach(num => {
  if (num) count += 5;
});

console.log(count);

/**
 * 
 * 123 - number
 * 
 * 1st Step:
 * digit = 3
 * reverse = (0 * 10) + 3 = 3
 * num = 3/10 = 12
 * 
 * 2nd Step:
 * digit = 2
 * reverse = (3 * 10) + 2 = 32
 * num = 1
 * 
 * 3rd Step:
 * digit = 1
 * reverse = (32 * 10) + 1 = 321
 * num = 0
 * 
 * Hence reverse will be "321"
 * 
 */


let arrVal = ["a", "b", "c", "d"];

let makeObj = function (input) {
  let reduceWay = input.reduce(
    (acc, it, index) =>
      ({...acc, [index]: it})
    , {} 
  );

  return reduceWay;
}

console.log(makeObj(arrVal));
