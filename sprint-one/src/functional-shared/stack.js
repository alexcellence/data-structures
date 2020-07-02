var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an empty object
  var obj = {};

  obj.storage = {};

  obj.counter = 0;

  // use extend to point to new methods so they aren't duplicated in new objects
  _.extend(obj, stackMethods);


  // return obj
  return obj;

};

var stackMethods = {
  push: function(value) {
    this.counter++;
    this.storage[value] = value;
  },

  pop: function() {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    var popped = this.storage[lastKey];
    if (this.counter > 0) {
      this.counter--;
    }
    delete this.storage[lastKey];
    return popped;
  },

  size: function() {
    return this.counter;
  }
};

