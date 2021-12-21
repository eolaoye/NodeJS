var treeNode = function (val, left, right) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
  
  var tree = function (input) {
      this.root = new treeNode(input[0]);
      
      let currentNode = this.root;
      let queue = [];
      fillTreeNode(currentNode, input[1], input[2], queue);
      let index = 3;
      let queueIndex = 0;
      while(index < input.length) {
        console.log('Queue', queue);
        console.log('Current Node', currentNode);
        currentNode = queue[queueIndex];
        fillTreeNode(currentNode, input[index], input[index+1], queue);
        index += 2;
        queueIndex++;
      }
      console.log('Queue', queue);
      console.log('Current Node', currentNode);
  }

  function fillTreeNode(node, leftValue, rightValue, queue) {
      node.left = new treeNode();
      node.right = new treeNode();      
      node.left.value = leftValue;
      node.right.value = rightValue;

      queue.push(node.left);
      queue.push(node.right);
  }
  
  function validateNode(node) {
    if (node == null) {
      return true;
    }

    if (!(node.left ? node.left.value < node.value : true) || 
    !(node.right ? node.right.value < node.value : true)) {
        return false;
    }
  
    // console.log(node);
    let leftValidated = node.left ? validateNode(node.left) : true;
    let rightValidated = node.right ? validateNode(node.right) : true;
  
    return leftValidated && rightValidated;
  }
  
  
  var isValidBST1 = function(root) {
    //build the BST first
    const myTree = new tree(root);        
    
    return validateNode(myTree.root);
};
  
var isValidBST = function(root) {
    let leftIndex = 0;
    let rightIndex = 0;

    for (let i = 0; i < root.length; i++) {

        leftIndex = 2*i + 1;
        rightIndex = 2*i + 2;

        if (leftIndex < root.length && rightIndex < root.length) {            
            if (root[leftIndex] !== null && root[leftIndex] > root[i]) {
                return false;
            }
            if (root[rightIndex] !== null && root[i] > root[rightIndex]) {
                return false;
            }
        }
    }
    
    return true;
};

console.log(isValidBST([5,1,4,null,null,3,6]));
console.log(isValidBST([5,1,7,null,null,6,8]));
