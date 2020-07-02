var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new obj
  var obj = {};

  // create a nested object to store things
  obj.storage = {};
  //create a counter property
  obj.counter = 0;

  // add queue methods to obj
  _.extend(obj, queueMethods);

  // return obj
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.counter++;
    this.storage[value] = value;
  },

  dequeue: function() {
    // create an array of keys in storage object
    var keys = Object.keys(this.storage);
    var firstKey = keys[0];
    // set the dequeued item to be the first item in storage
    var dequeued = this.storage[firstKey];
    if (this.counter > 0) {
      this.counter--;
    }
    // delete that first item in storage
    delete this.storage[firstKey];
    // return that now-deleted first item
    return dequeued;
  },

  size: function() {
    return this.counter;
  }
};


