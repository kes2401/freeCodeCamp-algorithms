// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  
  arr2.forEach(function(item){
    for(var i = 0; i < arr1.length; i++){
      if(item[1] === arr1[i][1]){
        sum = arr1[i][0] + item[0];
        arr1[i].shift();
        arr1[i].unshift(sum);
        arr2.splice(arr2.indexOf(item), 1);
      } 
    }
  });
  
  arr1 = arr1.concat(arr2);
  
  arr1.forEach(function(item){
    item.reverse();
  });
  arr1.sort();
  arr1.forEach(function(item){
    item.reverse();
  });
  
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
