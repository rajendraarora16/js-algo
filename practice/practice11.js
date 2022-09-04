function findMaxValueFromString(str) {
    
    let counter = 0;
    let maxNum = 0;
    let hashMap = {};

    for (let i = 0;  i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            counter++;
            hashMap[str[i]+''+i] = counter+1;
        } else {
            if (counter > maxNum) {
                maxNum = counter;
                hashMap[str[i]+''+i] = maxNum;
            }
            counter = 0;
        }
    }

    let objKey = Object.keys(hashMap);
    let objVal = Object.values(hashMap);
    let maxVal = 0;

    for (let i = 0; i < objVal.length; i++) {
        if (objVal[i] > maxVal) {
            maxVal = objVal[i];
        }
    }

    let maxValKey = objKey.find(k => hashMap[k] == maxVal);

    return maxValKey.replace(/\d+/g, '');
}

let str = "RRADASDSDADDDDDDDSSSSAAAAAAAQQWWWWWWWWWWQQQQQQQQQ";
console.log(findMaxValueFromString(str));