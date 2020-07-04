// left property, right property
// insert method, contains method, depthFirstLog method
// left of parent node is less than parents value, right is more than parents value

var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;

  tree.insert = function (value) {
    let node = new BinarySearchTree(value);

    let recurse = function (element) {
      if (element.value < value && !element.right) {
        element.right = node;
      } else if (element.value > value && !element.left) {
        element.left = node;
      } else if (element.value > value) {
        recurse(element.left);
      } else if (element.value < value) {
        recurse(element.right);
      }
    };
    recurse(this);
  };

  tree.contains = function (value) {

    if (this.value === value) { // 4
      return true;
    } else if (this.value < value && this.right) {
      return this.right.contains(value);
    } else if (this.value > value && this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }

  };

  tree.depthFirstLog = function (callback) {

    callback(this.value);

    if (this.left) {
      this.left.depthFirstLog(callback);
    }

    if (this.right) {
      this.right.depthFirstLog(callback);
    }

  };

  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */