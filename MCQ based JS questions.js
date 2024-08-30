const obj = {
    x: 1,
    getX: function() {
      return () => this.x; // make not that arrow function here inside return has the access for "this" as context
    },
  };
  
  const getXFromObj = obj.getX();
  
  console.log(getXFromObj()); // 1

// -----------------------------------------

const obj1 = {
    x: 1,
    getX: () => {  // here arrow function is declared
      return this.x;  // here "this" keyword has no context. As arrow function doesn't have binding or this keyword as context
    },
  };
  
  const getXFromObj = obj1.getX;
  
  console.log(getXFromObj()); // undefined

// -----------------------------------------

const obj1 = {
    x: 1,
    getX() {  // here normal function is used
      return function () {
        return this.x;
      }.bind(this) // here i have used "bind" which is now binding this keyword as "context".
    },
  };
  
  const getXFromObj = obj1.getX();
  
  console.log(getXFromObj()); // 1

// -----------------------------------------


const obj1 = {
    x: 1,
    method: function() { // here normal function is used, so here "this" can access as context.
        return function() {
            return this.x;
        }.bind(this); // here "this" is binded.
    },
};
  
const obj2 = {
    x: 2,
};
  
const func = obj1.method();

console.log(func.call(obj2)); // here call is used so now, obj1 will be accessed as "this".. BUT!!
// have a look at top "bind(this)" is used!! so bind has the most perference over call and apply.
// So output will be "1"

// -----------------------------------------

function MyClass() {
    this.value = 100;
    this.getValue = function() { // here normal function, i.e it is now can access to "this" as context
      return this.value; // so value will be here 100..
    };
}
  
const instance1 = new MyClass();
const instance2 = new MyClass();

const getValueFromInstance1 = instance1.getValue.bind(instance2); 
// now binding is done with instance2 but instance2 is same as instance1 and it has value = 100;

console.log(getValueFromInstance1());// output will be "100"
  
