const obj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const { age, city, ...newObj } = obj; // 'age' and 'city' is excluded from 'newObj'
  
  console.log(newObj);
  
// it will list {name: "john"} as output


// Another approach
// is to use "delete" keyword
