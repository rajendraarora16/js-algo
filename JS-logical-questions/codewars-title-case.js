const titleCase = (str, minorWord) => {

  if (!str) return ""; 

  let set = new Set();
  let result = [];
  
  // handle the minor word

  const minorW = minorWord ? minorWord?.toLowerCase()?.split(" ") : [];

  // prepare the title..
  str = str.toLowerCase();
  let title = str.split(" ");
  
  // process each word..
  for (let char of minorW) {
    set.add(char);
  }

  // iterate title..
  for (let i = 0 ; i < title.length ; i++) {
    
    //first letter
    if (i == 0) {
      const word = title[i];
      result.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1, word.length)}`);
      continue;
    }

    else if (!set.has(title[i])) {
      result.push(`${title[i].slice(0, 1)?.toUpperCase()}${title[i].slice(1, title[i].length)}`);
    }
    else {
      result.push(title[i]);
    }
  }
  
  return result.join(" ");
}

const str = "First A Of In";
const minorWord = "an often into";
console.log(titleCase(str, minorWord));
