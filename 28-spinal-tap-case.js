// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  
  // splits words with spaces targetting capital letters (really just for the str "AllThe-small Things"), then converts all letters to lower case, then replaces all non-alphabetic characters with a '-' before removing any duplicate consecutive '-'s.
  var newString = str.split(/(?=[A-Z])/).join(" ").toLowerCase().replace(/[^a-z]/g,"-").split(/-(?=-)/).join("");
  
  return newString;
}

spinalCase('This Is SpinalTap');
