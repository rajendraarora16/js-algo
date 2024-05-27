const colors = ['red', 'blue', 'red', 'green', 'blue', 'blue'];

/**
 * Expected output

{
    "red": 2,
    "blue": 3,
    "green": 1
}
 */

const countColor = colors.reduce((accumulator, current) => {
    if (accumulator[current]) {
        accumulator[current]++;
    } else {
        accumulator[current] = 1;
    }

    return accumulator;
}, {});

