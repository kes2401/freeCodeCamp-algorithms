// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
  // this checks if there are 2 arguments and if so whether both are numbers, if so then numbers are added, otherwise it will return 'undefined'
  if(arguments.length === 2){
    var x = arguments[0];
    var y = arguments[1];
    if(checkNum(x) === true && checkNum(y) === true){
      return x + y;
    } else {
      return undefined;
    }
    
  // this checks if there is only 1 argument, and if there is then it returns a function that expects 1 argument and returns the sum. If either arguments is not a number it will return 'undefined'.  
  } else if(arguments.length === 1){
    var j = arguments[0];
    if(checkNum(j) === true){
      return function(k){
        if(checkNum(k) === true){
        return j + k;
      } else {
        return undefined;
      }
      };
      
    } else {
      return undefined;
    }
    
  } else {
    return undefined;
  }
    
  // internal function to check is an argument is a number
  function checkNum(x){
    if(typeof(x) === "number"){
      return true;
    } else {
      return false;
    }
  }
    
}

addTogether(2,3);
