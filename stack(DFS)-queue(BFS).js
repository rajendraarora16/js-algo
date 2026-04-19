
/*DFS*/
const stackDFS = (tree, startNode) => {

  let stack = [startNode];
  let result = [];
  let visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();

    if (!visited.has(node)) {
      result.push(node);
      visited.add(node);
    }

    for (const neighbor of tree[node] || []) {
      stack.push(neighbor);
    }
  }

  return result;
}

const tree = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
}
console.log(stackDFS(tree, "A"));
//[ 'A', 'C', 'F', 'B', 'E', 'D' ]


/*BFS*/
const queueBFS = (tree, startNode) => {

  let queue = [startNode];
  let visited = new Set();
  let result = [];

  while (queue.length > 0) {

    let node = queue.shift();
    
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
    }

    for (const neighbor of tree[node] || []) {
      queue.push(neighbor);
    }
  }

  return result;
}

const tree = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: []
};
console.log(queueBFS(tree, "A"));
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]

