var Stack = function(storage, counter) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

  this.counter = 0;

};

Stack.prototype.push = function(value) {
  this.counter++;
  this.storage[value] = value;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var lastKey = keys[keys.length - 1];
  var popped = this.storage[lastKey];
  if (this.counter > 0) {
    this.counter--;
  }
  delete this.storage[lastKey];
  return popped;
};

Stack.prototype.size = function () {
  return this.counter;
};
