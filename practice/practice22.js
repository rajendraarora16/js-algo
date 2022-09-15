let obj = {
    num: 2
};

let addToNum = function(a, b) {
    return this.num + a + b;
}
console.log(addToNum.call(obj, 9, 2));

let obj2 = {
    first: 'raj',
    last: 'arora'
};

let fullName = function() {
    return this.first + " " + this.last;
}
console.log(fullName.apply(obj2));
