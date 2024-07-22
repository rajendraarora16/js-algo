const fib = (n) => {
    if (n <= 1) {
        return n;
    } 

    let series = [0, 1];

    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

console.log(fib(5)); // [ 0, 1, 1, 2, 3 ]
