let givenString = process.argv[2];
const countVowels = function(candidateString) {
  let lengthOfString = candidateString.length;
  let countVowel = 0;
  for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
    if(candidateString[characterIndex] == "a" || candidateString[characterIndex] == "A" ||
      candidateString[characterIndex] == "e" || candidateString[characterIndex] == "E" ||
      candidateString[characterIndex] == "i" || candidateString[characterIndex] == "I" ||
      candidateString[characterIndex] == "o" || candidateString[characterIndex] == "O" ||
      candidateString[characterIndex] == "u" || candidateString[characterIndex] == "U") {
      countVowel += 1;
    }
  }
  return countVowel;
}

console.log(countVowels(givenString));

