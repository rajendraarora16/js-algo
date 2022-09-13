/**
 * Minimum Path Sum (javascript)
 * 
 * Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
 * Output: 7
 * Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 * 
 * 
 * Input: grid = [[1,2,3],[4,5,6]]
 * Output: 12
 */

let minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            
            /**
             * grid[0][0] iteself contains the minimum path sum
             */
            if (i == 0 && j == 0) {
                continue;
            }

            // first row: grid[i][j] = previous grid(left) + current val
            if (i == 0) {
                grid[i][j] += grid[i][j - 1];
            }

            // first column: grid[i][j] = previous grid(top) + current val
            else if (j == 0) {
                grid[i][j] += grid[i - 1][j];
            }

            // grid[i][j] = get the min of previous grid(top / left) + current val
            else {
                grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
            }
        }
    }

    return grid[m - 1][n - 1];
}

let grid = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid));

