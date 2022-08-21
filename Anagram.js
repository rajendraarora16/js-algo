var isAnagram = function(s, t) {
    let arrS = [], arrT = [];

    if(s.length === t.length) {
        for(let i = 0; i < s.length; i++) {
            arrS.push(s[i]);
            arrT.push(t[i]);
        }

        arrS.sort();
        arrT.sort();

        let isArrMatched = arrS.every((s, i) => {
            return s == arrT[i];
        });
        return isArrMatched;
    }

    return false;
};

console.log("car".charAt(1));

console.log(isAnagram('car', 'rca'))
