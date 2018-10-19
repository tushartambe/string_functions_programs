let givenString = process.argv[2];
let lengthOfString = givenString.length;
let countVowel = 0;

for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  if(givenString[characterIndex] == "a" || givenString[characterIndex] == "A" ||
    givenString[characterIndex] == "e" || givenString[characterIndex] == "E" ||
    givenString[characterIndex] == "i" || givenString[characterIndex] == "I" ||
    givenString[characterIndex] == "o" || givenString[characterIndex] == "O" ||
    givenString[characterIndex] == "u" || givenString[characterIndex] == "U") {
    countVowel += 1;
  }
}

console.log("Total vowels :",countVowel);

