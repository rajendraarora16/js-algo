/**
 * Hash table is a data structure that allows to create a list of pair value
 * by using certain key with value.
 * 
 * 'charCodeAt()' method returns an integer between 0 and 65535 representing the UTF-16 code
 * 
 */

class HashTable {
    constructor(arrSize) {
        this.table = new Array(arrSize);
        this.size = 0;
    }

    hashStringToInt(key) {
        let hashSum = 0;
        if(key.length) {
            for(let i = 0; i < key.length; i++) {
                hashSum += key.charCodeAt(i);
            }
        }
        return hashSum % this.table.length;
    }

    set(key, value) {
        let index = this.hashStringToInt(key);
        if(this.table[index]) {
            for(let i = 0; i < this.table[index].length; i++ ) {
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return ;
                }
            }
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }

    get(key) {
        let index = this.hashStringToInt(key);
        if (this.table[index] && this.table[index].length) {
            for(let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this.hashStringToInt(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] == key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;   
        }
    }
}


let hashTable = new HashTable(2);
// hashTable.set("firstName", "Rajendra");
// hashTable.set("firstNe", "Rajendra");
hashTable.set("Spain", 150);
hashTable.set("å", 192);
hashTable.set("a", 150);
hashTable.set("b", 150);
hashTable.set("å", 192);

console.log("raj".charCodeAt(0))

console.log(hashTable.hashStringToInt("firstName"));

console.log(hashTable.get("firstName"));

console.log(hashTable.remove("firstName"));

console.log(hashTable.get("firstName"));

console.log('rahen');

console.log(hashTable.size);
console.log(hashTable.table);

