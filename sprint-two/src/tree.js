var makeTree = function(value){
  var newTree = {};
  newTree.parent = null;
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value, parent){
  var child = makeTree(value);
  child.parent = parent;
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = false;
  var childrenFunc = function(children){

    for(var i = 0; i<children.length; i++){
      if(children[i].value === target){
        result = true
      }
      childrenFunc(children[i].children)
    }
    return result
  }

  return childrenFunc(this.children)
};

treeMethods.traverse = function(callback){
  callback(this.value);
  if(this.children){
    for(var i = 0; i < this.children.length; i++){
      this.children[i].traverse(callback)
    }
  }else{
    return;
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
