var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);

  obj.storage = {};
  obj.counter = 0;

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.counter++;
    this.storage[value] = value;
  },

  dequeue: function() {
    var keys = Object.keys(this.storage);
    var firstKey = keys[0];
    var dequeued = this.storage[firstKey];
    if (this.counter > 0) {
      this.counter--;
    }
    delete this.storage[firstKey];
    return dequeued;
  },

  size: function() {
    return this.counter;
  }
};


