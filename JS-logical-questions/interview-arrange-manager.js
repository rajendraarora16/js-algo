// Find number of Employees Under every Manager
/*
 
{ "A", "C" },
{ "B", "C" },
{ "C", "F" },
{ "D", "E" },
{ "E", "F" },
{ "F", "F" }
 
In this example C is manager of A,
C is also manager of B, F is manager
of C and so on.
 
{
  "A": [],
  "B": [],
  "C": [A,B],
  "D": []
  "F": [A,B,C,E,F]
  "E": [D]
} */

const mangerInfo = (arr) => {

  let hashMap = {};

  for (const [ employee, manager ] of arr) {

    if (!hashMap[manager]) {
      hashMap[manager] = [];
    }

    if (employee !== manager) {
      hashMap[manager].push(employee);
    }
  }

  return hashMap;
}


const input = [ 
  [ "A", "C" ],
  [ "B", "C" ],
  [ "C", "F" ],
  [ "D", "E" ],
  [ "E", "F" ],
  [ "F", "F" ],
];

console.log(mangerInfo(input));
