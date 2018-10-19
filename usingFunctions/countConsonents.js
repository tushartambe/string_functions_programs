let gievnString = process.argv[2];

const countConsonents = function(candidateString) {
  let totalCount = 0;
  let lengthOfString = candidateString.length;
  for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
    if(candidateString[characterIndex] == "b" || candidateString[characterIndex] == "B" ||
      candidateString[characterIndex] == "c" || candidateString[characterIndex] == "C" ||
      candidateString[characterIndex] == "d" || candidateString[characterIndex] == "D" ||
      candidateString[characterIndex] == "f" || candidateString[characterIndex] == "F" ||
      candidateString[characterIndex] == "g" || candidateString[characterIndex] == "G" ||
      candidateString[characterIndex] == "h" || candidateString[characterIndex] == "H" ||
      candidateString[characterIndex] == "j" || candidateString[characterIndex] == "J" ||
      candidateString[characterIndex] == "k" || candidateString[characterIndex] == "K" ||
      candidateString[characterIndex] == "l" || candidateString[characterIndex] == "L" ||
      candidateString[characterIndex] == "m" || candidateString[characterIndex] == "M" ||
      candidateString[characterIndex] == "n" || candidateString[characterIndex] == "N" ||
      candidateString[characterIndex] == "p" || candidateString[characterIndex] == "P" ||
      candidateString[characterIndex] == "q" || candidateString[characterIndex] == "Q" ||
      candidateString[characterIndex] == "r" || candidateString[characterIndex] == "R" ||
      candidateString[characterIndex] == "s" || candidateString[characterIndex] == "T" ||
      candidateString[characterIndex] == "t" || candidateString[characterIndex] == "U" ||
      candidateString[characterIndex] == "v" || candidateString[characterIndex] == "V" ||
      candidateString[characterIndex] == "w" || candidateString[characterIndex] == "W" ||
      candidateString[characterIndex] == "x" || candidateString[characterIndex] == "X" ||
      candidateString[characterIndex] == "y" || candidateString[characterIndex] == "Y" ||
      candidateString[characterIndex] == "z" || candidateString[characterIndex] == "Z") {
      totalCount++;
    } 
  }
  return totalCount;
}

console.log(countConsonents(gievnString));
