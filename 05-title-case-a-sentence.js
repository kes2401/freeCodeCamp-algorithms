// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  
  var lowerCaseTitle = str.toLowerCase();
  var wordsArray = lowerCaseTitle.split(" ");
  
 for(var i = 0; i < wordsArray.length; i++){
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].substr(1);   
  }
  
  var title = wordsArray.join(" ");
  
  return title;
}

titleCase("I'm a little tea pot");
