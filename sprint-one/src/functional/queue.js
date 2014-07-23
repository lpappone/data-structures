var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var tempArray = [];

    for(var key in storage){
      tempArray.push(key)
    }
    var numberOfKeys = tempArray.length;

    storage[numberOfKeys] = value
  };

  someInstance.dequeue = function(){
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
    console.log(storage)

    if(storage[0]){
      for(var key in storage){
        tempArray.push(key);
      }
      console.log(tempArray)
      return tempArray.length
    }else{
      return 0;
    }
  };

  return someInstance;
};
