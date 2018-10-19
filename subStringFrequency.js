let givenString = process.argv[2];
let givenSubString = process.argv[3];
let lengthOfString = givenString.length;
let lengthOfSubString = givenSubString.length;
let countFrequency = 0;

for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  let foundedString = "";
  let index = characterIndex;
 
  for(let subStringCharIndex = 0; subStringCharIndex < lengthOfSubString; subStringCharIndex++) {
    if( givenSubString[subStringCharIndex] == givenString[index]) {
      foundedString =foundedString+givenString[index];
      index+=1;
    }

    if(foundedString == givenSubString) {
      countFrequency += 1;
    }
  }
}
console.log("Total count",countFrequency);
