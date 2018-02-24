// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
 
  while(arr.some(Array.isArray)){
    for(var i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        arr = arr.reduce(flatten, []); 
      }
    }
  }
  
  return arr;
   
  function flatten(a, b){
    return a.concat(b);
  }
  
}

steamrollArray([1, [2], [3, [[4]]]]);
