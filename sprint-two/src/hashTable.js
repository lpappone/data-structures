var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }

  var found = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    bucket.push([k, v]);
    this._counter++;
  }

  if (this._counter > 0.75 * this._limit) {
    this.resize(this._limit*2);
  }
};

HashTable.prototype.resize = function(newSize){
  var newStore = this._storage;
  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._counter = 0;

  var context = this;

  newStore.each(function(bucket) {
    if (bucket === undefined) {return;}
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      context.insert(tuple[0], tuple[1]);
    }
  })
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  
  if (!bucket) {
    return null; 
  }

  for (i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null; 
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  }

  for (i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i);
      this._counter--;
      if (this._counter < 0.25 * this._limit){
        this.resize(this._limit/2)
      }
      return tuple[1];
    }
  }
  return null;
};






/*
 * Complexity: What is the time complexity of the above functions?
 */
