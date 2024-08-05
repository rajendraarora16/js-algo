// find max value and return key name

let obj = {a: 12, b: 23, c: 3, d: 1, e: 89};

const maxValue = Object.keys(obj).reduce((acc, currentValue) => obj[acc] > obj[currentValue] ? acc : currentValue);

console.log(maxValue) // 'e'
