// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  
  var strArray = str.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var suffix;
  var index;
  var newString = "";
  
  function findIndexOfFirstVowel(){
   for(var i = 0; i < strArray.length; i++){
    for(var j = 0; j < vowels.length; j++){
      if(strArray[i] === vowels[j]){
        return strArray.indexOf(vowels[j]);
      }      
    }
   }
  }
  
  index = findIndexOfFirstVowel();
  
  if(index === 0){
    suffix = "way";
  } else if(index !== 0){
    suffix = "ay";
  }
  
  newString = str.substring(index) + str.substr(0, index) + suffix;
  
  return newString;
}

translatePigLatin("consonant");
Close this solution.
