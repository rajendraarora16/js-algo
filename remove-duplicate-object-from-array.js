/**
 * You have given the book details in an object inside array
 * 
 * So create a new array which remove the duplicates
 */

let books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" }, // <--- here you see the duplication
];


/**
 * 1st approach
 */
let dataArr = books.map( book => {
  return [book.title, book];
});

console.log(dataArr);

let mapArr = new Map(dataArr);
let result = [...mapArr.values()];

console.log(result);

/**
 * 2nd approach
 */
let tempArr = [];
let dataArr2 = books.map( book => {
  tempArr.push(JSON.stringify(book));
});

let setArr = new Set(tempArr);
let result2 = [...setArr.values()];
console.log(result2)



/**
 * 3rd Approach
 */
let books3 = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" }, // <--- here you see the duplication
];

let result3 = [];
let hashMap = {};

let res3 = books3.forEach( book => {
  if (!hashMap[book.title]) {
    result3.push(book);
    hashMap[book.title] = true;
  }
});
console.log(result3)
