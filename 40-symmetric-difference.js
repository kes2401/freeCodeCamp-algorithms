// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym(args) {
  
  args = Array.prototype.slice.call(arguments);
  
  var symDiff = args.reduce(function(diffArr, argArr){
    return diffArray(diffArr, argArr);
  }, []);
  
  symDiff = symDiff.reduce(function(acc, item){
    if(acc.indexOf(item) === -1){
      acc.push(item);
    }
    return acc;
  }, []);
  
  function diffArray(arr1, arr2) {
    var tempArr1 = arr1.filter(differenceArr2);
    var tempArr2 = arr2.filter(differenceArr1);
    var diffArr = [];
    function differenceArr2(value){
      return arr2.indexOf(value) === -1;
    }
    function differenceArr1(value){
      return arr1.indexOf(value) === -1;
    }
    diffArr = tempArr1.concat(tempArr2);
    return diffArr;
  }
  
  return symDiff; 
  
}

sym([1, 2, 3], [5, 2, 1, 4]);
