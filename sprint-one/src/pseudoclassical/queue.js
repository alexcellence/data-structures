var Queue = function(storage, counter) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.counter++;
  this.storage[value] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var firstKey = keys[0];
  var dequeued = this.storage[firstKey];
  if (this.counter > 0) {
    this.counter--;
  }
  delete this.storage[firstKey];
  return dequeued;
};

Queue.prototype.size = function() {
  return this.counter;
};



