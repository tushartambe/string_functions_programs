let givenString = process.argv[2];

const findReverse = function (candidateString) {
  let lengthOfString = candidateString.length;
  let reverseString ="";
  for(let characterIndex=lengthOfString-1; characterIndex >= 0 ; characterIndex--) {
    reverseString = reverseString+""+candidateString[characterIndex];
  }
  return reverseString;
}

console.log(findReverse(givenString));
