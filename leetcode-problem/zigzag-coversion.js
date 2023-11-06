/**
 * 
 * P   A   Y   P  A  L  I  S  H  I  R  I  N  G
 * 1   2   3   2  1  2  3  2  1  2  3  2  1  2
 * 
 * 1 - P A H N
 * 
 * 2 - A P L S I I G
 * 
 * 3 - Y I R
 * 
 * index should start from 1
 * index should iterate upto 3
 * index should reverse from 3 to 1
 * index should iterate from 1 to 3 or till string length
 */


const convert = (str, rows) => {

    let strArr = str.split('');

    if (strArr.length == 1 && rows == 1) {
        return strArr[0];
    }

    let counter = 0;
    let reverse = false;
    let result = [];
    let strFinalRes = '';

    for (let i = 0; i < strArr.length; i++) {
        if (counter === rows) {
            reverse = true;
        }

        if (counter === 1) {
            reverse = false;
        }

        if (counter < rows && !reverse) {
            counter++;
        }

        if ( reverse && counter !== 1 ) {
            counter--;
        }

        result.push({str: strArr[i], row: counter});
    }

    // sorting rows with ascending order
    result.sort((a, b) => (a.row - b.row));

    result.forEach(char => {
        strFinalRes += char.str;
    });

    return strFinalRes;
}


console.log(convert(str, 3)) // PAHNAPLSIIGYIR
console.log(convert(str, 4)) // PINALSIGYAHRPI