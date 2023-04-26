/**
We need output in this format if the input is given in this way:

const input = {
  a: [1, 2, 3],
  b: {
    c: {
      d: {
        e: 4,
      },
    },
  },
  f: 5,
  g: {
    h: [6, 7],
  },
};



// Output
const output = {
  a: [1, 2, 3],
  bcde: 4,
  f: 5,
  gh: [6, 7],
}
 */


const input = {
    a: [1, 2, 3],
    b: {
      c: {
        d: {
          e: 4,
        },
      },
    },
    f: 5,
    g: {
      h: [6, 7],
    },
  };
  
  
  let result = {};
  let tempArr = [];
  function hierarchyFunc(input) {
  
      for ( let [key, value] of Object.entries(input)) {
          tempArr.push(key);
          
          // array 
          if (value.length > 0 || typeof value == "number") {
              result[tempArr.join("")] = value;
              tempArr = [];
          } else {
              // go to recursive
              hierarchyFunc(value);       
          }
      }
      return result;
  }
  console.log(hierarchyFunc(input))
  