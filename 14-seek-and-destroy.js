// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  
  var temp = arr.slice.call(arguments);
  var args = temp.slice(1);
  
  function removeArgs(value){
    return args.indexOf(value) === -1;
  }

  var newArray = arr.filter(removeArgs);                 
  
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
