// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  
  var sortedArray = arr.sort(function compareNumbers(a, b) {
    return a - b;
  }); // callback function will sort array in ascending order
  
  sortedArray.push(num); //adds num to sorted array
  
  var newSortedArray = sortedArray.sort(function compareNumbers(a, b) {
    return a - b;
  }); // sorts array in ascending order again with new num
  
  var numIndex = newSortedArray.indexOf(num); //finds new index of added num

  return numIndex;
}
