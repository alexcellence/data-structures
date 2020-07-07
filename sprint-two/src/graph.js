

// Instantiate a new graph
var Graph = function() {

  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // var node = { value: value, edges: {} };
  // this.storage.node = node;
  this.storage[value] = { value: value, edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (let edgeNodes in this.storage[node].edges) {
    this.removeEdge(node, edgeNodes);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].edges[toNode] !== undefined ? true : false;
  // {storage: { 1: {val: 1, edge {} }, 2: {val:2, edge{} } }}
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    cb(key);
  }
  // cb.apply(this, Object.keys(this.storage));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// let graph = new Graph();
// console.log(graph);
// graph.addNode(1);
// console.log(graph);
