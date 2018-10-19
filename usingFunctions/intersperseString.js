let givenString = process.argv[2];

const intersperse = function(candidateString){
  let lengthOfString = candidateString.length;
  let splitCharacter = "";
  let addchar = "";
  for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
    splitCharacter = splitCharacter+addchar+candidateString[characterIndex];
    addchar = ",";
  }
  return splitCharacter;
}

console.log(intersperse(givenString));
