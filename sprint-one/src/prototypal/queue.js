var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var methods = Object.create(queueMethods);
  methods.added = 0;
  methods.removed = 0;
  return methods;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this[this.added] = value;
	this.added++;
};

queueMethods.dequeue = function(){
	var result = this[this.removed];
	delete this[this.removed];
	this.removed++;
	return result;
};

queueMethods.size = function(){
	if(this.added < this.removed){
		return 0
	}else{
		return this.added - this.removed
	}
}