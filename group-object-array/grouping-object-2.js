/**
Given an array:

const myArr = [
  {
    "name":"Display",
    "group":"Technical detals",
    "id":"60",
    "value":"4"
  },
  {
    "name":"Manufacturer",
    "group":"Manufacturer",
    "id":"58",
    "value":"Apple"
  },
  {
    "name":"OS",
    "group":"Technical detals",
    "id":"37",
    "value":"Apple iOS"
  }
]

We want the expected output like below:

0 : [{
       'group'   = 'Technical detals',
       'name'    = 'Display',
       'id'      = '60',
       'value'   = '4'
    },
    {
       'group'   = 'Technical detals',
       'name'    = 'OS',
       'id'      = '37',
       'value'   = 'Apple iOS'
    }],
1 : [
    {
       'group'   = 'Manufacturer',
       'name'    = 'Manufacturer',
       'id'      = '58',
       'value'   = 'Apple'
    }]
 */
let hashMap = {};
let result = myArr.reduce((acc, itr, index) => {
    if (itr.group in hashMap) {
        acc[hashMap[itr.group]].push(itr)
    } else {
        acc[index] = acc[index] || [];
        acc[index].push(itr);
        hashMap[itr.group] = index;
    }
    return acc;
}, {});

console.log(result);
    