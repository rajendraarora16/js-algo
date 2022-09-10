/**
 * Hash table is a data structure that allows to create a list of pair value
 * by using certain key with value.
 * 
 * 'charCodeAt()' method returns an integer between 0 and 65535 representing the UTF-16 code
 * 
 */

class HashTable {

    constructor(value) {
        this.arrLength = value;
        this.list = new Array();
    }


    hashStringToInt = function (key) {
        let hashSum = 0;
        
        for (let i=0; i < key.length; i++) {
            hashSum += key.charCodeAt(i);
        }
        return hashSum % this.arrLength;
    }

    set (x, y) {

        if(!this.list[this.hashStringToInt(x)]) {
            this.list[this.hashStringToInt(x)] = [];
        }
        this.list[this.hashStringToInt(x)].push([x, y]);
    }

    get (x) {
        if(!this.list[this.hashStringToInt(x)]) {
            return undefined;
        }

        let result;
        this.list[this.hashStringToInt(x)].forEach(v => {
            if (v[0] == x) {
                result = v[1];
            }
        });
        return result;
    }
}

let m = new HashTable(500);

m.set("raj", "arora");
m.set("raj2", "arora1");

console.log(m.arrLength);

for(let i = 0; i < 5000000; i++) {
    m.set(`a${i}`, `b${i}`);
}

console.log(m.list);


let timeStart = new Date().getTime();
m.get('FoOO');
let timeEnd = new Date().getTime();

console.log(timeEnd-timeStart+'ms')

console.log(m.get('a55'));
console.log(m.get('raj'));
console.log(m.get('raj2'));
