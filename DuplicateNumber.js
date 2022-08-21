let arr = [1,2,3,1];

let detectDuplicate = function(arr) {
    
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            return true;
        }
    }

    return false;
}


console.log(detectDuplicate(arr));