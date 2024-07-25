

const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };

// output {d: 10, e: 12}

/**
 * Explanation: check input1 and input2 and compare and 
 * get the result which one is same
 */

// 1st approach..
let result = {};
for (const [key, value] of Object.entries(input1)) {
    
    if (input2[key] == value) {
        result[key] = value;
    }
}
console.log(result) // { d: 10, e: 12 }


// 2nd approach..
let result2 = {};
const resp = Object.keys(input1).forEach(item => {
    if (input2[item] === input1[item]) {
        result2[item] = input1[item]
    }
})
console.log(result2) // { d: 10, e: 12 }


// 3rd approach..
let result3 = {}
for (let i = 0 ; i < Object.keys(input1).length ; i++) {

    let keysOfInput1 = Object.keys(input1)[i];
    let valuesOfInput1 = Object.values(input1)[i];

    const matchedInputKeys = Object.keys(input2).includes(keysOfInput1);
    const matchedInputValues = Object.values(input2).includes(valuesOfInput1);

    if (matchedInputKeys && matchedInputValues) {
        result2[keysOfInput1] = valuesOfInput1;
    }
}

console.log(result3) // { d: 10, e: 12 }

