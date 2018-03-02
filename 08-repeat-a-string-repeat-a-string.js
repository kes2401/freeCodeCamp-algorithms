// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {

  var newString = "";
  
  if (num <= 0) {
    return "";
  }
  else {  
    newString = str.repeat(num);
  }

  return newString;
}

repeatStringNumTimes("abc", 3);
