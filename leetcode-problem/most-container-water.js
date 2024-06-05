let array = [1,8,6,2,5,4,8,3,7];

/**
 * Brute force logic
 * @param height array items
 * @returns 
 */

function mainProgram1 (height) {
    let res = 0;

    for (let left = 0; left < height.length; left++) {
        for (let right = left + 1; right < height.length; right++) {

            const area = (right - left) * Math.min(height[left], height[right]);
            res = Math.max(res, area);
        }
    }

    return res;
}

console.log(mainProgram1(array)); // 49 as output


function mainProgram2 (height) {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    console.log(right);
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        res = Math.max(area, res);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return res;
}

console.log(mainProgram2(array)); // 49 as output
