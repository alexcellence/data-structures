var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    someInstance.storage[counter] = value;
  };

  someInstance.pop = function() {
    var popped = someInstance.storage[counter];
    delete someInstance.storage[counter];
    if (counter > 0) {
      counter--;
    }
    return popped;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
