// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  
  var first = str.charCodeAt(0);
  var last = str.charCodeAt(str.length - 1);
  var length = str.length;
  var range = (last - first) + 1;
  var temp = first;
  
  if(length === range){
    return undefined;
  } else {
    for(var i = 0; i <= str.length; i++){
      if(str.indexOf(String.fromCharCode(temp)) === -1){
        return String.fromCharCode(temp);
      }
      temp++;
    }  
  }
}

fearNotLetter("abce");
