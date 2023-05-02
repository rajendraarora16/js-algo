const pipe = (...fns) => x => fns.reduce((acc, currentItr) => currentItr(acc), x); 
const double = x => x * 2
const square = x => x * x

// function pipe
var output_final = pipe(square, double)(2);
console.log(output_final);
