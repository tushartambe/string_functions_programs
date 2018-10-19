let givenString = process.argv[2];
const consecativeCharacters = function(candidateString){
  let lengthOfString = candidateString.length;
  let characters = "";
  let newline = "";
  for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
    if(candidateString[characterIndex] == candidateString[characterIndex+1]) {
      characters += newline+candidateString[characterIndex]+candidateString[characterIndex+1];
      newline = "\n";
    } 
  }
  return characters;
}

console.log(consecativeCharacters(givenString));
