let givenString = process.argv[2];
let strikeOutCharacter = process.argv[3];
let lengthOfString = givenString.length;
let strikeOut= "-";
let strikedString = "";

for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  if(givenString[characterIndex] == strikeOutCharacter) {
    strikedString = strikedString+strikeOut;
  } else {
    strikedString = strikedString+givenString[characterIndex];
  }
}
console.log("striked string ",strikedString);

