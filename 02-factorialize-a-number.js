// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!

function factorialize(num) {
  
  var sum = 1;
  var i = 1;
  
  if (num === 0) {
    return 1;
  }
  else {           
    while(i <= num){
      sum *= i; 
      i++;
      }
  }
  
  return sum;
}

factorialize(5);
