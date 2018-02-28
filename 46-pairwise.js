// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.
// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
// Index  0	 1 	2	  3	  4
// Value	 7	 9	11	13	15
// Below we'll take their corresponding indices and add them.
// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg) {
  
  var answer = 0;
  var pairs = [];
  
  if(arr.length < 2) {
    return 0;
  }

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(i !== j && arr[i] + arr[j] === arg && pairs.indexOf(i) < 0 && pairs.indexOf(j) < 0){
        pairs.push(i, j);      
      }     
    }    
  }    
  
  answer = pairs.reduce(function(acc, curr){
    return acc + curr;
  }, 0);

  return answer;
}

pairwise([1,4,2,3,0,5], 7);
