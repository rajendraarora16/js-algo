// Given string "aaAAbbCCddd"
// Make an output like this way.. "a2A2C2d3"


const reduceResp = arr.reduce((acc, currentValue) => {

    if(currentValue in acc) {
        acc[currentValue]++;
    } else {
        acc[currentValue] = 1;
    }
    return acc;
}, {});


console.log(reduceResp) // { a: 2, A: 2, b: 2, C: 2, d: 3 }

let result = [];
for (const [key, value] of Object.entries(foo)) {
    result.push(key, value);
}

console.log(result.join('')) // 'a2A2b2C2d3'
