let x = 321
x.toString();
let result = [];
    
for (let i = x.length - 1; i >= 0; i--) {
    console.log(i);
    console.log(x);
    result.push(x[i]);
}
console.log(result);

