// infinite curry
const infiniteCurry = (a) => (b) => {
    if (!b) {
        return a;
    } else {
        return infiniteCurry(a + b);
    }
}
console.log(infiniteCurry(10)(29)()) // 39


// simple curry
const curry = function(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let cal = curry (10)(10)(10);
console.log(cal) // 30


// arrow curry
const curry = (a) => (b) => (c) => a + b + c;
let cal = curry (10)(10)(10);
console.log(cal) // 30

