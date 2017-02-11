var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
<<<<<<< HEAD
  var lastIndex = Object.keys(someInstance).length - 1;
  // var lastIndex = size - 1;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[lastIndex] = value;
=======
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
>>>>>>> f6e43b579c40647c3d45824461353adc507dd62d
    size++;
  };

  someInstance.pop = function() {
<<<<<<< HEAD
    var poppedValue = someInstance[lastIndex];
    // someInstance[lastIndex] = undefined;
    size--;
    delete someInstance[lastIndex];
    // lastIndex--;
    // console.log(poppedValue);
    // console.log(size);
    // console.log(lastIndex);
    return poppedValue;
=======
    var result = storage[size - 1];
    //delete storage[lastIndex];
    storage[size - 1] = undefined;
    size--;
    return result;
>>>>>>> f6e43b579c40647c3d45824461353adc507dd62d
  };

  someInstance.size = function() {
    if (size <= 0) {
      size = 0;
    }
    return size;
  };
  return someInstance;
};
