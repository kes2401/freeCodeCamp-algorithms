// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function checkCashRegister(price, cash, cid) {
  
  // Values of currency demoninations
  var denoms = [
    {name: "ONE HUNDRED", value: 100.00},
    {name: "TWENTY", value: 20.00},
    {name: "TEN", value: 10.00},
    {name: "FIVE", value: 5.00},
    {name: "ONE", value: 1.00},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.10},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01}
  ];
  
  // Total change due
  var changeDue = cash - price;
  
  // Total Cash-in-Drawer
  var totalCid = 0;
  for(var i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = Number(totalCid.toFixed(2));
  
  // Determine if there is 'Insufficient Funds' or if drawer should be 'closed'
  if(changeDue > totalCid) {
    return "Insufficient Funds";
  } else if(changeDue === totalCid) {
    return "Closed";
  }
  
  // Convert Cash-in-Drawer 2D array to a Cash-in-Drawer object
  var cidObj = {};
  for(var index = 0; index < cid.length; index++){
    cidObj[cid[index][0]] = cid[index][1];
  }
  
  // Calculate the sorted change in coins and bills
  var change = denoms.reduce(function(acc, val) {
    
    // Run through each cash denomination in the drawer to gather change
    var amount = 0;
    while(cidObj[val.name] > 0 && changeDue >= val.value){
      cidObj[val.name] -= val.value;
      changeDue -= val.value;
      amount += val.value;   
      // rounding change due to avoid precision issues
      changeDue = Math.round(changeDue * 100) / 100;
    }
    if(amount > 0) {    
      acc.push([val.name, amount]);
    } 
    return acc;  
  }, []);
  
  // Check if there is still change due that can't be met with the cash in drawer
  if(changeDue > 0 || change.length < 1){
      return "Insufficient Funds";  
  }
  
  // Here is your change, ma'am.
  return change;
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
