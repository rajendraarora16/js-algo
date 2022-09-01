class HashTable {
    
    constructor(size) {
        this.arrSize = size;
        this.hashTableArr = new Array(this.arrSize);
    }

    hashStringToInt(x) {
        let hashSum = 0;
        for (let i = 0; i < x.length; i++) {
            hashSum += x.charCodeAt(i);
        }
        return hashSum % this.arrSize;
    }

    set (x, y) {

        if (!this.hashTableArr[this.hashStringToInt(x)]) {
            this.hashTableArr[this.hashStringToInt(x)] = [];
        }
        this.hashTableArr[this.hashStringToInt(x)].push([x, y]);
    }

    get (x) {
        if (!this.hashTableArr[this.hashStringToInt(x)]) {
            return undefined;
        }
        let result;
        this.hashTableArr[this.hashStringToInt(x)].forEach(val => {
            console.log('val: ', val[0]);

            if (val[0] == x) {
                result = val[1];
            }
        });
        return result;
    }
}

let hash = new HashTable(5);

hash.set("firstName", "Rajendra");
hash.set("lastName", "arora");

console.log(hash)

console.log(hash.get("firstName"));
console.log(hash.get("lastName"));
