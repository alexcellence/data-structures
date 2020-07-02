class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, counter) {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.counter++;
    this.storage[value] = value;
  };

  pop() {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    var popped = this.storage[lastKey];
    if (this.counter > 0) {
      this.counter--;
    }
    delete this.storage[lastKey];
    return popped;
  };

  size() {
    return this.counter;
  };

}