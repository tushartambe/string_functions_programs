let candidateString = process.argv[2];
let strikeOutCharacter = process.argv[3];


const strikeOut = function(candidateString,strikeOutCharacter ){
  let lengthOfString = candidateString.length;
  let strikeOut= "-";
  let strikedString = "";

  for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
    if(candidateString[characterIndex] == strikeOutCharacter) {
      strikedString = strikedString+strikeOut;
    } else {
      strikedString = strikedString+candidateString[characterIndex];
    }
  }
  return strikedString;
}
console.log(strikeOut(candidateString,strikeOutCharacter));

