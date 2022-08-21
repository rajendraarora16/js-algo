let findDuplicate = function(arr) {

    let tortoise = arr[0];
    let hare = arr[0];

    while (true) {
        tortoise = arr[tortoise];
        hare = arr[arr[hare]];

        if(tortoise == hare) {
            break;
        }
    }

    tortoise = arr[0];

    while (tortoise != hare) {
        tortoise = arr[tortoise];
        hare = arr[hare];
    }

    return hare;
}


let arr = [5, 4, 3, 2, 2, 1];
console.log(findDuplicate(arr));