function* generatorFun() {
    yield 10;
    yield 20;
    yield 30;    
}
      
// Calling the Generate Function
var gen = generatorFun();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);