/**
 * Two passing arguments 
 */

let sum = function (a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(4)(5));


let sum2 = function (a) {
    return function (b) {
        if (b) {
            return sum2 (a + b);
        }
        return a;
    }
}
console.log(sum2(10)(20)())
