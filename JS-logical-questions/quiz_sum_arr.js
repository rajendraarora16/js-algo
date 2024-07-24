const arr = [2, 7, 11, 4, -2];

/**
 * 
 * Output
 * [20, 15, 11, 18, 24]
 * 
 * explanation:
 * 
 * Calculate the sum of all values except the current index value;
 * 
 * 20 = 7 + 11 + 4 + (-2)
 * 15 = 2 + 11 + 4 + (-2)
 * 11 = 2 + 7 + 4 + (-2)
 * 18 = 2 + 7 + 11 + (-2)
 * 24 = 2 + 7 + 11 + 4
 * 
 */

const getSumOfArr = (arr) => {
    let result = [];

    for (let i = 0 ; i < arr.length; i ++) {

        let sum = 0;
        for (let y = 0 ; y < arr.length; y++ ) {
            
            if (arr[i] !== arr[y]) {
                sum += arr[y];
            }
        }

        result.push(sum);
    }

    return result;
}

console.log(getSumOfArr(arr)) // [20, 15, 11, 18, 24]
