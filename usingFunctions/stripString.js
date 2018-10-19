let givenString = process.argv[2];

const spaceRemover = function (candidateString) {
let lengthOfString = candidateString.length;
let stripedString="";
for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  if(candidateString[characterIndex] != " ") {
    stripedString = stripedString+candidateString[characterIndex];
  }
}
return stripedString;
}
console.log(spaceRemover(givenString));

