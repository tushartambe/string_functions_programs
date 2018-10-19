let givenString = process.argv[2];
let lengthOfString = givenString.length;
let stripedString="";
for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  if(givenString[characterIndex] != " ") {
    stripedString = stripedString+givenString[characterIndex];
  }
}
console.log("Striped String :"+stripedString);

