// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  
  var longestString = 0;
  
  var words = str.split(" ");
  
  for(var i = 0; i < words.length; i++){
    if (words[i].length > longestString)
      longestString = words[i].length;
  }
    
  return longestString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
