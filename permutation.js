
const getPermutation = (arr) => {
    
    let result = [];
    
    // recursive way..
    const permute = (arr, matrix = []) => {
        
        if (arr.length === 0) {
            result.push(matrix.join(""));
        }

        for (let i = 0 ; i < arr.length ; i++) {
            
            let currentArr = [...arr];
            let next = currentArr.splice(i, 1);
            
            permute(currentArr, matrix.concat(next));
        }
    }

    permute(arr);
    
    return result;
}


let str = "abc";
console.log(getPermutation(str.split("")));

// output
//  [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
