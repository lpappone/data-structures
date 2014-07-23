var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var storage = {};
	storage.removed = 0;
	storage.added = 0;
   _.extend(storage, queueMethods);
   return storage
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
	this[this.added] = value;
	this.added ++
}

queueMethods.dequeue = function() {
	var returnItem = this[this.removed];
	delete this[this.removed];
	this.removed ++
	return returnItem
}

queueMethods.size = function(){
	if(this.added < this.removed){
		return 0;
	}
	return this.added - this.removed;

}