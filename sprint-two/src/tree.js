var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];// fix me

  return newTree;
};

var treeMethods = {};

treeMethods.removeFromParent = function () {


  this.parent = null;

};

treeMethods.traverse = function (cb) {

  if (this.value === undefined && this.children.length > 0) {

    for (let i = 0; i < this.children.length; i ++) {
      this.children[i].value = cb(this.children[i].value);
      console.log(this.children[i].value);
      if (this.children[i].children.length > 0) {
        this.children[i].traverse(cb);
      }
    }
  }

  //   cb (this.value)
  //   for (let i = 0; i < this.children.length; i ++) {
  //      this.children[i].traverse(cb);
  //   }


  //   for (let i = 0; i < node.children.length; i ++) {
  //     let child = node.children[i];

  //     if (node.children === 0) {
  //       node.value = cb(node.value);
  //     }
  //     if (child.children.length > 0) {

  //       return traverse(cb, children[i]);
  //     } else {
  //       child.value = cb(child.value);
  //     }
  //   }
  // }
  // // debugger;
  // this.traverse(cb, this);
};

treeMethods.addChild = function(value) {
  // create new instance of Tree
  // push newTree into this.children

  let tree = new Tree(value);
  tree.parent = this.value;
  this.children.push(tree);
};

treeMethods.contains = function(target) {

  // create helper function (this)
  //    if this.value === target return true
  //    else
  //      if this.children.length > 0
  //        create a for loop
  //        run helperfunction on this.children[i];
  //      else return false
  // run helper function on this
  // helperFunc (this)
  // console.log(this);

  // let containsTarget = function (node) {
  //   console.log(node);
  //   if (node.value === target) {
  //     return true;
  //   } else {
  //     if (node.children.length > 0) {
  //       for (let i = 0; i < node.children.length; i ++) {
  //         console.log(node.children[i]);
  //         return containsTarget(node.children[i]);
  //       }
  //     }
  //   }
  //   return false;
  // };

  // return containsTarget(this);
  if (this.value === target) {
    return true;
  }

  for (let i = 0; i < this.children.length; i ++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

// [      5:5 ,  children:[7:7, children:[8:8, children[] ],        9:9, children:[]]                  6: 6,   children[8]          ]

/*
 * Complexity: What is the time complexity of the above functions?
 */


// let tree = new Tree(1);
// console.log(tree);
// let tree = new Tree(1);
// tree.addChild(2);
// tree.addChild(3);
// tree.children[0].addChild(4);
// tree.children[1].addChild(5);
// tree.children[1].children[0].addChild(6);
// console.log(tree.contains(6));
// console.log(tree);
