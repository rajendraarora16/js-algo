const compositeFunc = (...args) => x => args.reduce((acc, currentItr) => currentItr(acc), x);
const double = x => x * 2
const square = x => x * x

// function pipe
var output_final = compositeFunc(square, double)(5);
console.log(output_final);

// Output
// 50
