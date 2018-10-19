let givenString = process.argv[2];
let lengthOfString = givenString.length;
let splitCharacter = "";
let addchar = "";
for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  splitCharacter = splitCharacter+addchar+givenString[characterIndex];
  addchar = ",";
}

console.log("given string :",givenString);
console.log("After intersperse String :",splitCharacter);
