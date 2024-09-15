/**
 * 1st approach
 */


let obj =  { a: 1, b: { c: 2, d: { e: 3 } } };
// flat this object

const flatObj = (obj) => {
    
    let result = {};

    const flatIt = (unflatObj, temp = "") => {

        for (const [ key, value ] of Object.entries(unflatObj)) {

            if (typeof value === "object") {

                flatIt(value, key);
                
            } else {
                
                const newKey = temp ? `${temp}.${key}` : key;
                result[newKey] = value;
            }
        }
    }

    
    flatIt(obj);
    return result;
}

console.log(flatObj(obj));


/**
 * ------------------------------------------------------------------------------------------
 */

/**
 * 2nd Approach
 */


let obj =  { a: 1, b: { c: 2, d: { e: 3 } } };
// flat this object

const flatObj = (obj) => {
    
    let result = {};
    let temp = "";

    const flatIt = (unflatObj) => {

        for (const [ key, value ] of Object.entries(unflatObj)) {

            if (typeof value === "object") {
            
                temp += key;

                flatIt(value);
            } else {
                if (temp) {

                    const newKey = `${temp.split("").join(".")}.${key}`;
                    
                    result[newKey] = value;
                } else {
                    result[key] = value;
                }
            }
        }
    }

    
    flatIt(obj);
    return result;
}

console.log(flatObj(obj));

// {a: 1, b.c: 2, b.d.e: 3}
