var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add a string to the back of the queue
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    // remove and return the string at the front of the queue

    var keys = Object.keys(storage);
    var shiftPosition = keys.shift();
    // create variable for the item that is being removed
    var dequeued = storage[shiftPosition];

    // delete that first item
    delete storage[shiftPosition];
    // change counter
    // if (counter > 0) {
    //   counter--;
    // }

    // return item that just got deleted
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
