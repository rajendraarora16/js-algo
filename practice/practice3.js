function add (x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

let a = new add(5);
console.log(a(10)(20));

let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];
rainForests.splice(0, 2)
console.log(rainForests)


const numbers = [1, 2, 3, 4, 5];
const [one, two, three, four, five] = numbers;
console.log(three)


const obj = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    ...obj,
    a: 0
}

console.log(obj2);


let animals = ['jaguar', 'eagle'];
animals.pop();
console.log(animals)

let animalss = ['jaguar', 'eagle'];
console.log(animalss.filter(e => e === "jaguar"));


let vowels = "aeiou"
for (var i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    //Each letter printed on a separate line as follows;
    //a
    //e
    //i
    //o
    //u
  }

const animal = ['Rabbit', 'Dog', 'Cat'];
animal.unshift('lizard');
console.log(animal)


var sound = 'grunt';
var bear = { sound: 'roar' };
function roar() {
    console.log(this.sound);
}

roar.apply(bear)
console.log(roar());


const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunc = (arr) => {
    return arr.map(x => x + 3).filter(x => x < 7);
}
console.log(myFunc(myNumbers));

console.log("raj".toUpperCase())


let animall = ["eagle", "osprey", "salmon"];
let key = animall => animall === "salmon";

if(animall.some(key)){
  console.log("swim");
}

if (true) {
    var x = 5;
    const y = 6;
    let z = 7;
}

console.log(x + y + z);

const myFuncc = (num1, num2 = 2, num3 = 2) => {
    return num1 + num2 + num3;
};

let val = [1, 3];

console.log(myFuncc(2, ...val));
  
