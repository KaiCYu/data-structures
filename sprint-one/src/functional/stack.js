var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastIndex = Object.keys(someInstance).length - 1;
  // var lastIndex = size - 1;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[lastIndex] = value;
    size++;
  };

  someInstance.pop = function() {
    var poppedValue = someInstance[lastIndex];
    // someInstance[lastIndex] = undefined;
    size--;
    delete someInstance[lastIndex];
    // lastIndex--;
    // console.log(poppedValue);
    // console.log(size);
    // console.log(lastIndex);
    return poppedValue;
  };

  someInstance.size = function() {
    if (size <= 0) {
      size = 0;
    }
    return size;
  };
  return someInstance;
};
