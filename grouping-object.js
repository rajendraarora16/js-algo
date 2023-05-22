let employees = [
    {name: 'Alina', company: 'Google', id : 1},
    {name: 'Vika', company: 'Coca Cola', id : 2},
    {name: 'Alex', company: 'Jonson & Jonson', id : 3},
    {name: 'Vlad', company: 'Google', id : 4},
    {name: 'Fibi', company: 'Coca Cola', id : 5},
    {name: 'Joey', company: 'Google', id : 6},
]


// expected output:

/** 
{
    "Google": [...],
    "Coca Cola": [...],
    "Jonson & Jonson": [...]
}
 */

/**
 * Using reduce method with accumulator
 */
let result = employees.reduce((acc, itr) => {
    acc[itr.company] = acc[itr.company] || [];
    acc[itr.company].push(itr);
    return acc;
}, {});
