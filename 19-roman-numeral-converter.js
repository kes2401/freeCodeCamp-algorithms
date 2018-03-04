// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  // Function works on numbers up to 4999
  var numerals = "";
  var tempArr = [];
  
  var thou = ["", "M", "MM", "MMM", "MMMM"];
  var hund = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  
  var numThou = Math.floor(num / 1000);
  num -= (numThou * 1000);
  var numHund = Math.floor(num / 100);
  num -= (numHund * 100);
  var numTens = Math.floor(num / 10);
  num -= (numTens * 10);
  var numOnes = num;
    
  tempArr.push(thou[numThou], hund[numHund], tens[numTens], ones[numOnes]);
  
  numerals = tempArr.join("");
  
  return numerals;
}

convertToRoman(649);
