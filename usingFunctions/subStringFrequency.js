let givenString = process.argv[2];
let givenSubString = process.argv[3];

const subStringFrequency = function(candidateString,subString) { 
  let lengthOfString = candidateString.length;
  let lengthOfSubString = subString.length;
  let countFrequency = 0;

  for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
    let foundedString = "";
    let index = characterIndex;

    for(let subStringCharIndex = 0; subStringCharIndex < lengthOfSubString; subStringCharIndex++) {
      if( subString[subStringCharIndex] == candidateString[index]) {
        foundedString =foundedString+candidateString[index];
        index+=1;
      }

      if(foundedString == subString) {
        countFrequency += 1;
      }
    }
  }
  return countFrequency;
}
console.log(subStringFrequency(givenString,givenSubString));
