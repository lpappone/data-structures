var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var methods = Object.create(stackMethods);
  methods.count = 0;
  return methods;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this[this.count] = value;
	this.count++;
}

stackMethods.pop = function() {
	this.count--;
	var popped = this[this.count];
	delete this[this.count];
	return popped;
}

stackMethods.size = function() {
	if (this.count < 0) {
		return 0;
	}
	return this.count;
}




