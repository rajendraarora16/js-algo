
const input = { a: 1, b: { c: 2, d: { e: 3 } } };
// { "a": 1, "b.c": 2, "b.d.e": 3 }

let result = {} ;
const flatObj = (obj, temp = "") => {
  
  for (const [key, value] of Object.entries(obj)) {

    const modifiedKey = temp ? `${temp}.${key}` : key;

    if (typeof value === "object") {
      flatObj(value, modifiedKey);
    } else {
      result[modifiedKey] = value;
    }
  }

  return result;
}

// Flatten to { "a": 1, "b.c": 2, "b.d.e": 3 }


console.log(flatObj(input));
// output:
// { "a": 1, "b.c": 2, "b.d.e": 3 }
