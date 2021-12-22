/**
 * Leet Code
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

//put result in node1
function traverseDFS(node1, node2) {
    if (node1.left && node2.left) {
        traverseDFS(node1.left, node2.left);
    }
    
    if (!node1.left) {
        node1.left = node2.left;
    }
    
    node1.val = (node1.val ?? 0) + (node2.val ?? 0);
    
    if (node1.right && node2.right) {
        traverseDFS(node1.right, node2.right);
    }
    
    if (!node1.right) {
        node1.right = node2.right;
    }
}

function traverseBFS(node1, node2) {
    
    let currentPos = null;
    let queue = [];

    queue.push([node1, node2]);

    while(queue.length > 0) {
      currentPos = queue.shift();

      traverseBFSNode(currentPos[0], currentPos[1], queue);

    }
}

function traverseBFSNode(node1, node2, queue) {
    //set the node value
    node1.val = (node1.val ?? 0) + (node2.val ?? 0);

    //store references to the children of the current node in the queue
    if (node1.left) { 
        if (node2.left) {
            queue.push([node1.left, node2.left]);
        }
    }
    else {
        node1.left = node2.left;
    }
    
    if (node1.right) { 
        if (node2.right) {
            queue.push([node1.right, node2.right]);
        }
    }
    else {
        node1.right = node2.right;
    }
  
}


var mergeTrees = function(root1, root2) {
    if (root1 == null) {
        return root2;
    }
    
    if (root2 == null) {
        return root1;
    }
    
    // traverseBFS(root1, root2);
    traverseDFS(root1, root2);
    
    return root1;
};