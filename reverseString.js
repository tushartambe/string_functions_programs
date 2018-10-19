let givenString = process.argv[2];
let lengthOfString = givenString.length;
let reverseString ="";
for(let characterIndex=lengthOfString-1; characterIndex >= 0 ; characterIndex--) {
  reverseString = reverseString+""+givenString[characterIndex];
}

console.log("given string :",givenString);

console.log("reverse String :",reverseString);
