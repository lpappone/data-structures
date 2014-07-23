var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {};
  storage.count = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};


stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++
}

stackMethods.pop = function() {
  if(this.count === 0){
  	return 0
  }else{
  	this.count --
  	return this[this.count]
  }
}

stackMethods.size = function() {
	if(this.count<0){
		return 0
	}
	return this.count
}


