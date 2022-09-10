/**
 * Implement atoi which converts a string to an integer.
 * 
 * 
 * Input: "42"
 * Output: 42
 *  
 * Input: "   -42"
 * Output: -42
 * 
 * Input: "4193 with words"
 * Output: 4193
 * 
 * Input: "-91283472332"
 * Output: -2147483648
 * 
 * Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
 * Thefore INT_MIN (−231) is returned.
 * 
 */
let myAtoi1 = function(s) {
    
    let INT_MAX = 2147483647;
    let INT_MIN = -INT_MAX - 1;
    let result = isNaN(parseInt(s.trim())) ? 0 : parseInt(s.trim());
    
    if (result > INT_MAX) {
        return INT_MAX;
    }
    else if (result < INT_MIN) {
        return INT_MIN;
    }
    else {
        return result;
    }
};
console.log(myAtoi1("23223rajendra arora"));



/**
 * Without using trim solution.
 */

let myAtoi2 = function (str) {

    let i = 0;
    let sign = 1;
    let result = 0;
    let INT_MAX = 2147483647;
    let INT_MIN = - INT_MAX - 1;

    /**
     * For left side space ' ' condition
     */
    while (str[i] == ' ') {
        i++;
    }

    if (str[i] == '+' || str[i] == '-') {
        sign = str[i] == '+' ? 1 : -1;
        i++;
    }

    while (str[i] >= '0' && str[i] <= '9') {
        result = (result * 10) + (str[i] - 0);
        
        if (sign == 1 && result > INT_MAX) {
            return INT_MAX;
        }

        if (sign == -1 && result > INT_MAX + 1) {
            return INT_MIN;
        }
        i++;
    }
    return result * sign;
}
console.log(myAtoi2("23223rajendra arora"));

