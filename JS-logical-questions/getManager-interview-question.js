
const getManager = (arr, id) => {

  let hashMap = {};

  for (let i = 0 ; i < arr.length ;i++) {

    hashMap[arr[i].id] = arr[i];
  }


  let result = [];
  while (true) {

    const emp = hashMap[id];

    result.push(emp.name);

    if (emp.id == emp.managerId) break;

    id = emp.managerId;
  }

  return result;
}

const employees = [
  { id: 1, name: "A", managerId: 1 },
  { id: 2, name: "B", managerId: 1 },
  { id: 3, name: "C", managerId: 1 },
  { id: 4, name: "D", managerId: 2 }
];

console.log(getManager(employees, 4));

