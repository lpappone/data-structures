var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.added = 0;
  this.removed = 0;
};

Queue.prototype.enqueue = function(value) {
	this[this.added] = value;
	this.added++
};

Queue.prototype.dequeue = function(){
	var result = this[this.removed];
	delete this[this.removed];
	this.removed++;
	return result;
}

Queue.prototype.size = function(){
	if(this.added < this.removed){
		return 0
	}else {
		return this.added - this.removed
	}
}


