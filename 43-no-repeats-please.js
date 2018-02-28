// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
    
  var regex = /(.)\1/;
  
  return heap(str).filter(function(el){
    return !regex.test(el);
  }).length;
  
  // function to run Heap's algorithm
  function heap(str){
    var permutations = [];
    var arr = str.split('');
    var n = str.length;
    // the recursive function generating the permutations
    function gen(n, arr){
      if(n === 1){
        return permutations.push(arr.join(''));   
      } else {   
        for(var i = 0; i < n-1; i++){
          gen(n-1, arr);  
          if(n % 2 === 0){
            var a = arr[i];
            arr[i] = arr[n-1];
            arr[n-1] = a;
          } else {
            var b = arr[0];
            arr[0] = arr[n-1];
            arr[n-1] = b;
          }
        }
        gen(n-1, arr);  
      }
    }
    gen(n, arr);
    return permutations; 
  }
}

permAlone('aab');
