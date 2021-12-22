/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 function validateBFS(node, minValue, maxValue) {
    console.log('node value: ', node.val, '; min value: ', minValue, '; max value: ', maxValue);

    if (node.left && node.left.val) {
        if (node.left.val >= node.val) {
            return false;
        }
    }
    if (node.right && node.right.val) {
        if (node.right.val <= node.val) {
            return false;
        }
    }
        
    if (node.left) {
        if (!validateBFS(node.left, minValue, node.val)) {
            return false;
        }
    }
        
    if (node.right) {
        if (!validateBFS(node.right, node.val, maxValue)) {
            return false;
        }
    }
    
    if (maxValue && node.val >= maxValue) {
        return false;
    }
    
    if (minValue && node.val <= minValue) {
        return false;
    }
    
    return true;
}

var isValidBST = function(root) {
    return validateBFS(root);
};

var TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var MyTreeRoot = function(array) {
    this.val = array[0];    
    this.left = new TreeNode();
    this.right = new TreeNode();

    let currentNode = this;
    let leftIndex = 0;
    let rightIndex = 0;
    let queue = [];
    for (let i = 0; i < array.length; i++) {
        // console.log('array[i]: ', array[i]);
        // console.log('current node: ', currentNode);

        if (!currentNode) {
            currentNode = queue.shift();
            continue;
        }
        
        currentNode.val = array[i];

        leftIndex = 2 * i + 1;
        rightIndex = 2 * i + 2;

        if (leftIndex < array.length) {
            currentNode.left = array[leftIndex] ? new TreeNode(array[leftIndex]) : null;
            queue.push(currentNode.left);
        }
        
        if (rightIndex < array.length) {
            currentNode.right = array[rightIndex] ? new TreeNode(array[rightIndex]) : null;
            queue.push(currentNode.right);
        }  
        
        // console.log('current node: ', currentNode);
        // console.log('Queue: ', queue);
        //set currentNode to next on the queue
        currentNode = queue.shift();
    }
}
const myTree = new MyTreeRoot([5,4,6,null,null,3,7]);
console.log(myTree);

console.log(validateBFS(myTree));