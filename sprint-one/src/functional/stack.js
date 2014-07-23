var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    // add value to first index in object
    // push all other values up one in index
    for(var key in storage){
      storage[parseInt(key)+1] = storage[key]
    }

    storage[0] = value;
  };

  someInstance.pop = function(){
    for(var key in storage){
      storage[parseInt(key)-1] = storage[key]
      delete storage[key]
    }

    var returnValue = storage[-1];
    delete storage[-1];
    return returnValue
  };

  someInstance.size = function(){
    var tempArray = [];

    if(storage[0]){
      for(key in storage){
        tempArray.push(key);
      }
      return tempArray.length
    }else{
      return 0;
    }

  };

  return someInstance;
};