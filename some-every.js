const cart = [
  { item: "Laptop", price: 1200, inStock: true },
  { item: "Mouse", price: 25, inStock: false },
  { item: "Monitor", price: 300, inStock: true }
];

// some
const canWeShip = cart.some(item => item.inStock == true);
console.log(canWeShip) //true -- here we have a short circuit because one item contains "true".. 

// every
const canWeShip = cart.every(item => item.inStock == true);
console.log(canWeShip) //false -- here we have a short circuit because one item contains "false".. 

