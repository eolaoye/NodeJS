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
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));
tree.lookup(20);