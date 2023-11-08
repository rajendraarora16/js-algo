
const reverse = (num) => {
    let reverse = 0;
    let isNegative = 0 > num ? true : false;
    num = Math.abs(num);

    while (num > 0) {
        let digit = num % 10;
        reverse = (reverse * 10) + digit;
        num = Math.floor(num / 10);
    }
    
    if (Math.pow(2, 31) < reverse) {
        return 0;
    } 

    return isNegative ? -reverse : reverse;
}

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(1233434343434)) // 0 

// Math.pow(2, 31) ->  2147483648 max value

