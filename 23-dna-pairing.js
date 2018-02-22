// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  
  var pairs = [];
  
  var topStrand = str.split(""); 
  
  for(var i = 0; i < topStrand.length; i++){
    var temp = [];
    temp.push(topStrand[i]);
    if(topStrand[i] === "G"){
      temp.push("C");
    } else if (topStrand[i] === "C"){
      temp.push("G");
    } else if (topStrand[i] === "A"){
      temp.push("T");
    } else if (topStrand[i] === "T"){
      temp.push("A");
    }
    
    pairs.push(temp);
    
  }
  
  return pairs;
}

pairElement("GCG");
