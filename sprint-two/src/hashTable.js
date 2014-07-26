var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._newStore;
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    this._storage.set(i, [k,v]);
    this._counter++;
  }else{
    this._storage.get(i).push(k,v);
    this._counter++;
  }
  console.log(this._limit, this._counter)
  if(.75 <= this._counter/this._limit){
    console.log(this._counter/this._limit)
    this.increaseSize();
  }

};


HashTable.prototype.increaseSize = function(){
    this._limit *= 2;

    this._newStore = this._storage;
    this._storage.each(function(value, key, collection){
        console.log(collection, 'increaseSize')
      })
    this._storage = makeLimitedArray(this.limit)
    // console.log(this._limit, 'limit')
    var holder = this;
    this._counter = 0;
    this._newStore.each(function(value, key, collection){
  		holder.insert(key, value)
  	})


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentItem = this._storage.get(i);
  for(var j = 0; j < currentItem.length; j++){
    if(currentItem[j] === k){
      return currentItem[j+1];
    }
  }
};

HashTable.prototype.remove = function(k){
	// this._storage.each(function(value, key, collection){
	// 	console.log(value, 'value', key, 'key')
	// })
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(k, 'k remove')
  // console.log(i, 'i remove')
  // console.log(this._storage.get(i), 'this._storage.get(i) remove')
  var currentItem = this._storage.get(i);
  var toDelete;
  // console.log(this._counter, 'this._counter before')
  for(var j = 0; j < currentItem.length; j++){
    if(currentItem[j] === k){
      toDelete = currentItem[j+1];
      currentItem[j+1] = null;
    }
  }


  // this should only run if number of items in storage is less than half the limit
  // if only one added, counter only goes up one and this will run!
  if (this._counter >= 8 && .75 >= this._counter/this._limit) {
		console.log('')
    this.decreaseSize()
	}

  return toDelete;
};


HashTable.prototype.decreaseSize = function(){
    this._limit /= 2;
    console.log(this._limit, 'limit')
    this._newStore = this._storage;
    this._storage.each(function(value, key, collection){
        console.log(collection, 'increaseSize')
      })
    this._storage = makeLimitedArray(this.limit)
    // console.log(this._limit, 'limit')
    var holder = this;
    this._counter = 0;
    this._newStore.each(function(value, key, collection){
      holder.insert(key, value)
    })
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
