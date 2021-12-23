
function Graph () {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  
  Graph.prototype.addNode = function (node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }  
  }
  
  Graph.prototype.addEdge = function (node1, node2) {
    this.addNode(node1);
    this.addNode(node2);
  
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  
  Graph.prototype.showConnections = function() {
    const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  }
  
  const myGraph = new Graph();
  // myGraph.addNode('0');
  // myGraph.addNode('1');
  // myGraph.addNode('2');
  // myGraph.addNode('3');
  // myGraph.addNode('4');
  // myGraph.addNode('5');
  // myGraph.addNode('6');
  
  myGraph.addEdge('3', '1');
  myGraph.addEdge('3', '4');
  myGraph.addEdge('4', '2');
  myGraph.addEdge('4', '5');
  myGraph.addEdge('1', '2');
  myGraph.addEdge('1', '0');
  myGraph.addEdge('0', '2');
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 