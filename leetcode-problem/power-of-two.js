let isPowerOfTwo = function(n) {

    let counter = 0;
    while (counter < 30) {
        if (Math.pow(2, counter) === n) {
            return true;
        }
        counter++;
    }
    return false;
}