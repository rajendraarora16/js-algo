
// Numbers --> "(a - b) or (b - a)"

let arr = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 22, 90, 224];

// Ascending
arr.sort((a, b) => (a-b));

// Descending
arr.sort((a, b) => (b-a));


// Characters --> "a.localeCompare(b) or b.localeCompare(a)"

let charArr = ["a", "e", "c", "f", "b", "d", "g", "i", "a"];

// Ascending..
charArr.sort((a, b) => a.localeCompare(b))

// Descending..
charArr.sort((a, b) => b.localeCompare(a));

console.log(charArr)


