var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var storage = {};
   _.extend(storage, queueMethods);
   return storage
};

var queueMethods = {

	enqueue : function(value){
		var tempArray = [];
		console.log(this)
		for(var key in this){
			tempArray.push(key)
		}
		console.log(tempArray)
		this[tempArray.length-3] = value

	},

	dequeue : function(){
		for(var key in this){
			this[parseInt(key)-1] = this[key];
			debugger;
			delete this[key]
		}

		returnValue = this[-1];
		delete this[-1];
		return returnValue

	},

	size : function(){
		var tempArray = [];
		if(this[0]){
			for(var key in this){
				tempArray.push(key)
			}
			console.log(tempArray)
			return tempArray.length -3
		}else{
			return 0;
		}
	}

};



