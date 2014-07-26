var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail === null){
      list.tail = makeNode(value);
      list.head = list.tail;
    }else{
      var newNode = makeNode(value);
      var current = list.tail;
      current.next = newNode;
      list.tail = newNode;
      list.tail.prev = current;
    }
  };

  list.addToHead = function(value){
    if(list.head === null){
      list.head = makeNode(value);
      list.tail = list.head;
    }else {
      var newNode = makeNode(value);
      var current = list.head;
      current.prev = newNode;
      list.head = newNode;
      list.head.next = current;

    }
  }

  list.removeHead = function(){
      var returnNode = list.head;
      list.head = list.head.next ;
      return returnNode.value;
  };

  list.contains = function(target){
    var found = false;
    for(var key in list){
      if(list[key].value === target){
        found = true;
      }
    }
    return found;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
