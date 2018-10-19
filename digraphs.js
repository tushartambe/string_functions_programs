let givenString = process.argv[2];
let lengthOfString = givenString.length;

for(let characterIndex=0; characterIndex < lengthOfString ; characterIndex++) {
  if(givenString[characterIndex] == givenString[characterIndex+1]) {
    console.log("Characters :",givenString[characterIndex]+givenString[characterIndex+1]);
  } 
}

