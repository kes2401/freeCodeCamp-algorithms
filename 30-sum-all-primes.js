// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
  
  var nums = [];
  var primes = [];
  var sum = 0;
  
  for(var i = 2; i <= num; i++){
    nums.push(i);
  }
  
  primes = nums.filter(function(n){
    if(n < 2){
      return false;
    }
    
    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++){
      if (n % i == 0){
         return false;
      }
    }
    return true;  
  });
              
  sum = primes.reduce(function (a, b) {
    return a + b;
  }, 0);
  
  return sum;
}

sumPrimes(10);
