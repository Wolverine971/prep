class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root || !value) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
  }
  remove(value) {}
  // iterative
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  // recursive
  // pass params in mo fo
  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = this.queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return breadthFirstSearchRecursive(queue, list);
  }

  depthFirstSearch() {
    let currentNode = this.root;
    let nextNodes = [];
    while (true) {
      console.log(currentNode.value);
      if (node.left) {
        currentNode = node.left;
        if (node.right) {
          nextNodes.push(node.right);
        }
      } else {
        //    nextNodes.forEach(n=>{

        //    })
        if (nextNodes.length) {
          currentNode = nextNodes[0];
          // return this
        } else {
          return this;
        }
        //   if (node.right) {
        //     // nextNodes.push(node.right)
        //     currentNode = node.right

        //   }
      }
    }
  }

  dfsInOrder() {
    traversenOrder(this.root, []);
  }

  dfsPostOrder() {
    traversePostOrder(this.root, []);
  }

  dfsPreOrder() {
    traversePreOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    console.log(node.value);
    if (node.left) {
      traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      traverseInOrder(node.right, list);
    }
    return list;
  }
}

//          9
//      4       20
//  1     6   15  170

InOrder - [1, 4, 6, 9, 15, 20, 170];
PreOrder - [9, 4, 1, 6, 20, 15, 170];
PostOrder - [1, 6, 4, 15, 170, 20, 9];
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
// debugger;
tree.insert(1);
tree.lookup(9);
// console.log(JSON.stringify(traverse(tree.root)));

// tree.breadthFirstSearch();
tree.breadthFirstSearch([tree.root], []);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function validateBST(node, queue) {
  if (node.right) {
    queue.push(node.right);
    if (node.right.value < node.value) {
      return false;
    }
  }
  if (node.left) {
    queue.push(node.left);
    if (node.left.value > node.value) {
      return false;
    }
  }
  
}
