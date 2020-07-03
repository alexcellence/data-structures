var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    let node = new Node(value);

    if (!list.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  };

  list.removeHead = function() {

    let removed = this.head.value;
    this.head = this.head.next;
    return removed;

  };

  list.contains = function(target) {

    var checkForValue = function(node) {
    // if value === target
      if (node.value === target) {
        //  return true
        return true;
        // else if next !== null
      } else if (node.next !== null) {
        //   run function on value again
        return checkForValue(node.next);
      } else {
        // else return false
        return false;
      }
    };
    return checkForValue(this.head);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  node1 = { 1: 1, next: null }
  node2 = { 2: 2, next: null }

  list = { head: null, tail: null }
  // if head === null ,{ head: {1: 1, next: null}, tail: {1: 1, next:{2: 2, next:null }}}
  // else { head : {1: 1}, next: {2: 2, next, null} tail: {2:2, next: {3:3, next: null}}} this.tail.next = newNode
  // find tail node and replace next val with new node value

  node1 = { 1: 1, next: null}
  node2 = { 2: 2, next: {3: 3}}
  node3 = { 3: 3, next: node4} <-- this is the old tail
  node4 = { 4: 4, next: null} <-- this is the new tail

  list = {1: 1, next: null}

  // head: { 1: 1, next: null} tail: {1: 1, next:null }
 // we are going to set newNode to the tail // head: { 1: 1, next: null} tail: {2: 2, next:null } // list.tail = newNode
 //

 // if(noHead) {
   this.head = newNode
   this.tail = this.head
   else {
     this.tail.next = newNode
     this.tail = newNode
   }
 }
 */
