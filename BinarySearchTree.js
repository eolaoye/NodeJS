// Create a linked List
// 10 --> 5 --> 16

class BinarySearchNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.root = value ? new BinarySearchNode(value) : null;
    this.length = value ? 1 : 0;
  } 

  insert(value) {
    const newNode = new BinarySearchNode(value);

    if (this.root == null) {
      this.root = newNode;
      return this.root;
    }

    //traverse the tree to find the right position
    let currentNode = this.root;

    while(true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }      
    }
  }

  lookup(value) {

    if (!this.root) {
      return null;
    }
    
    //traverse the tree to find the right position
    let currentNode = this.root;

    while(currentNode) {
        
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = this.advance(currentNode, value);
    }

    return null;
  }

  advance (currentNode, value) {      
      if (value < currentNode.value) {
        return currentNode.left;
      }
      else {
        return currentNode.right;
      }
  }

  remove(value) {
    //no tree
    if (!this.root) {
      return null;
    }

    //traverse the tree to find the right position while holding the 
    //previous Node.

    let previousNode = null;
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return this.removeNode(previousNode, currentNode);
      }

      previousNode = currentNode;
      currentNode = this.advance(currentNode, value);
    }
  }

  removeNode1(previousNode, node) {

    //what if the previous node is null???

    //if current node is a leaf node just remove it
    if (this.isLeafNode(node)) {

      if (!previousNode) {
        this.root = null; //delete the entire tree
        return this; 
      }

      previousNode.right = null
      return this;
    }

    let replacementNode = null;

    if (node.right) {
      replacementNode = node.right;

      if (node.left) {
        let nodeLeftParent = node.right;

        //advance nodeLeftParent till it gets to a leaf
        while (nodeLeftParent.left) {
          nodeLeftParent = nodeLeftParent.left;
        }

        nodeLeftParent.left = node.left; 
      }

      //if the replacement node has a left hand side then
      //switch positions only if the replacement node does not have a 
      //right hand side
      if (replacementNode.left) {
        if (!replacementNode.left.right){
          replacementNode = replacementNode.left;
          replacementNode.right = node.right;
        }
      }
    } 
    else {
      replacementNode = node.left;
    }
    

    if (!previousNode) {
      this.root = replacementNode; //replace the root
      return this; 
    }

    previousNode.right = replacementNode;
    
    return this;
  }

  removeNode(previousNode, node) {
    //1. removing a leaf node 
    //    1a: node is the root
    //    1b: node is not the root

    //2. removing a node that has only left child
    //    2a: node is the root
    //    2b: node is not the root

    //3. removing a node that has only right child
    //    3a: node is the root
    //    3b: node is not the root

    //4. removing a node that has left and right children
    //    4a: node is the root
    //    4b: node is not the root


    //1. removing a leaf node 
    if (this.isLeafNode(node)) {
      //  1a: node is the root
      if (!this.previousNode) {
        this.root = null;
        return this;
      }

      //find out if the node is to the right of the 
    }

  }

  isLeafNode(node) {
    return node.right === null && node.left === null;
  }

  traverseBFS() {
    if (this.root == null) {
      return null;
    }

    let currentNode = null;
    const list = [];
    let queue = [];

    queue.push(this.root);

    while(queue.length > 0) {
      currentNode = queue.shift();

      traverseBFSNode(currentNode, list, queue);

    }

    return list;
  }

  traverseInOrder() {
    //start from the leftmost leaf node and work up and right
    return traverseInOrderNode(this.root, []);
  }

  traversePreOrder() {
    //start from the leftmost leaf node and work up and right
    return traversePreOrderNode(this.root, []);
  }

  traversePostOrder() {
    //start from the leftmost leaf node and work up and right
    return traversePostOrderNode(this.root, []);
  }
}

function traverseBFSNode(node, list, queue) {
  //push the current node value
  list.push(node.value);

  //store references to the children of the current node in the queue
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function traverseInOrderNode(node, list) {
  if (node.left) {
    traverseInOrderNode(node.left, list);
  }
  list.push(node.value);
  if(node.right) {
    traverseInOrderNode(node.right, list);
  }

  return list;
}

function traversePreOrderNode(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrderNode(node.left, list);
  }
  if(node.right) {
    traversePreOrderNode(node.right, list);
  }

  return list;
}

function traversePostOrderNode(node, list) {
  if (node.left) {
    traversePostOrderNode(node.left, list);
  }
  if(node.right) {
    traversePostOrderNode(node.right, list);
  }
  list.push(node.value);

  return list;
}

function validateBFSTree(tree) {
  return validateBFSNode(tree.root);
}

function validateBFSNode(node) {
  if (node == null) {
    return true;
  }

  // console.log(node);
  let leftValidated = node.left ? validateBFSNode(node.left) : true;
  let rightValidated = node.right ? validateBFSNode(node.right) : true;

  return leftValidated && rightValidated && (node.left ? node.left.value < node.value : true) && 
    (node.right ? node.right.value > node.value : true);
}

const tree = new BinarySearchTree(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));
// tree.lookup(20);

// console.log(tree.traverseBFS());
// console.log(tree.traverseInOrder());
// console.log(tree.traversePreOrder());
// console.log(tree.traversePostOrder());

console.log(validateBFSNode(tree.root));