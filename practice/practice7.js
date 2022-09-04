
function checkRepeatativeString(str) {
    let seen = new Set();
    let hashMap = {};
    let counter = 1;
    let valueOccurrenceHappening = false;
    let maxValue = 1;

    for (let i = 0; i < str.length; i++) {

        if (str[i] == str[i-1]) {
            valueOccurrenceHappening = true;
        }

        if (seen.has(str[i]) && valueOccurrenceHappening) {

            if (hashMap[str[i]].length > 1) {
                hashMap[str[i]][0]++;
                hashMap[str[i]][1]++;
                valueOccurrenceHappening = false;
            } else {
                hashMap[str[i]]++;
                valueOccurrenceHappening = false;
            }
        } 
        else if (seen.has(str[i]) && str[i] == str[i+1]) {
            if (hashMap[str[i]].length > 1 && hashMap[str[i]][0] == 1) {
                continue ;
            }
            maxValue = Math.max(maxValue, hashMap[str[i]]);
            hashMap[str[i]] = [counter, maxValue];
        }
        else {
            seen.add(str[i]);
            hashMap[str[i]] = counter;
            valueOccurrenceHappening = false;
        }
    }
    return hashMap;
}

let str = "BAAAABBAAAAAACCCCCBDDDDEEEEEEE,FFF";
console.log((checkRepeatativeString(str)));