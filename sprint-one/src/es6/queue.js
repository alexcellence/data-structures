class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, counter) {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    this.counter++;
    this.storage[value] = value;
  };

  dequeue() {
    var keys = Object.keys(this.storage);
    var firstKey = keys[0];
    var dequeued = this.storage[firstKey];
    if (this.counter > 0) {
      this.counter--;
    }
    delete this.storage[firstKey];
    return dequeued;
  };

  size() {
    return this.counter;
  };

}
