// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  
  var tempArr1 = arr1.filter(differenceArr2);
  var tempArr2 = arr2.filter(differenceArr1);
  
  function differenceArr2(value){
    return arr2.indexOf(value) === -1;
  }
  
  function differenceArr1(value){
    return arr1.indexOf(value) === -1;
  }
  
  newArr = tempArr1.concat(tempArr2);
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
