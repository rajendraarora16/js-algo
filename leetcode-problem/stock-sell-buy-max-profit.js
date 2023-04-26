/**
  
  Write a Program For Stock Buy Sell To Maximize Profit
  example - 

  input [100, 180, 260, 310, 40, 535, 695, 10]
  output - [40, 695]
 */


  let input = [100, 180, 260, 310, 40, 535, 695, 10, 50, 40, 40, 680];

  let result = [];
  
  let min = input[0];
  let max = 0;
  
  for (let i= 0; i < input.length; i++) {
      min = Math.min(input[i], min);
      max = Math.max(max, input[i] - min);
  }
  result.push(min, (max+min));
  console.log(result)